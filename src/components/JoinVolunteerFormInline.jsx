import React, { useState } from "react";
import { db, storage } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  runTransaction,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Player } from "@lottiefiles/react-lottie-player";
import successAnim from "../animations/success.json";

export default function JoinVolunteerFormInline({ onSubmit }) {
  // 1. STATE
  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    mobile: "",
    country: "",
    age: "",
    gender: "",
    address: "",
    occupation: "",
    otherOccupation: "",
    interestAwareness: false,
    interestCleanup: false,
    interestDigital: false,
    interestEducation: false,
    interestResearch: false,
    interestFundraising: false,
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  // ✅ NEW: State to store the generated ID for display
  const [successId, setSuccessId] = useState("");

  // 2. HANDLERS
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const errs = {};
    if (!form.fullName) errs.fullName = "Name is required";
    if (!form.emailId) errs.emailId = "Email is required";
    if (!form.mobile) errs.mobile = "Mobile is required";
    if (!form.country) errs.country = "Country is required";
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setBusy(true);
    setErrors({});

    try {
      const email = form.emailId.trim().toLowerCase();

      // A. DUPLICATE CHECK
      const q = query(
        collection(db, "volunteers"),
        where("email", "==", email),
      );
      const snap = await getDocs(q);
      if (!snap.empty) throw new Error("This email is already registered.");

      // B. UPLOAD IMAGE
      let uploadedImageUrl = null;
      if (imageFile) {
        const fileName = `Volunteer_profile_images/${Date.now()}_${imageFile.name}`;
        const storageRef = ref(storage, fileName);
        await uploadBytes(storageRef, imageFile);
        uploadedImageUrl = await getDownloadURL(storageRef);
      }

      // C. TRANSACTION
      const volunteerId = await runTransaction(db, async (tx) => {
        const counterRef = doc(db, "counters", "volunteers");
        const counterSnap = await tx.get(counterRef);
        let next = (counterSnap.exists() ? counterSnap.data().count : 0) + 1;
        tx.set(counterRef, { count: next }, { merge: true });

        const volId = `MBCT-${String(next).padStart(4, "0")}`;
        const finalOccupation =
          form.occupation === "Other" ? form.otherOccupation : form.occupation;

        const newRef = doc(collection(db, "volunteers"));
        tx.set(newRef, {
          volunteerId: volId,
          name: form.fullName.trim(),
          email: email,
          mobile: form.mobile.trim(),
          country: form.country.trim(),
          age: form.age,
          gender: form.gender,
          address: form.address.trim(),
          occupation: finalOccupation,
          status: "approved",
          imageUrl: uploadedImageUrl,
          createdAt: serverTimestamp(),
          interests: {
            Awareness: form.interestAwareness,
            "Beach Cleanups": form.interestCleanup,
            "Digital Media": form.interestDigital,
            Education: form.interestEducation,
            Research: form.interestResearch,
            Fundraising: form.interestFundraising,
          },
        });
        return volId;
      });

      // ✅ SUCCESS: Set the ID and switch view
      setSuccessId(volunteerId);
      setDone(true);
      if (onSubmit) onSubmit({ volunteerId });
    } catch (err) {
      console.error(err);
      setErrors({ server: err.message || "Submission failed. Try again." });
    } finally {
      setBusy(false);
    }
  };

  // ✅ UPDATED SUCCESS UI
  if (done)
    return (
      <div className="w-full flex justify-center p-6">
        <div className="w-full max-w-lg rounded-2xl bg-[#001921] border border-white/10 p-8 text-center shadow-xl">
          <Player
            autoplay
            keepLastFrame
            src={successAnim}
            style={{ height: "120px" }}
          />

          <h3 className="text-2xl font-bold text-white mt-4">
            Thank you for joining!
          </h3>

          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-cyan-200 text-sm font-medium uppercase tracking-wider mb-1">
              Your Volunteer ID
            </p>
            <p className="text-3xl font-extrabold text-white tracking-widest">
              {successId}
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center gap-1 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-lg">👤</span>
              <span className="font-semibold">{form.fullName}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">{form.country}</span>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6 text-white">
      <h3 className="text-2xl font-semibold mb-6">Join as a Volunteer</h3>

      <div className="space-y-4">
        {/* ... FILE INPUT SECTION (Keep exactly as before) ... */}
        <div className="mb-2">
          <label className="block text-sm text-cyan-200 mb-2">
            Profile Photo (Optional)
          </label>
          <div className="flex items-center gap-4">
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-16 h-16 rounded-lg object-cover border border-cyan-400"
              />
            )}
            <label className="flex-1 cursor-pointer group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center w-full h-16 border-2 border-dashed border-white/20 rounded-lg group-hover:border-cyan-400/50 bg-white/5 transition-colors">
                <div className="text-center">
                  <span className="text-sm text-cyan-100 group-hover:text-white font-medium">
                    {imageFile
                      ? imageFile.name
                      : "📂 Click to select from File Manager"}
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* ... REST OF YOUR FORM FIELDS (Keep exactly as before) ... */}

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-cyan-200 mb-1">
              Full Name*
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="Jane Doe"
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-cyan-200 mb-1">Country*</label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="India"
            />
            {errors.country && (
              <p className="text-red-400 text-xs mt-1">{errors.country}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-cyan-200 mb-1">Age</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="25"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-200 mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white"
            >
              <option value="" className="text-black">
                Select Gender
              </option>
              <option value="Male" className="text-black">
                Male
              </option>
              <option value="Female" className="text-black">
                Female
              </option>
              <option value="Other" className="text-black">
                Other
              </option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-cyan-200 mb-1">Email*</label>
            <input
              name="emailId"
              type="email"
              value={form.emailId}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="you@example.com"
            />
            {errors.emailId && (
              <p className="text-red-400 text-xs mt-1">{errors.emailId}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-cyan-200 mb-1">
              Mobile Number*
            </label>
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="+91 98765..."
            />
            {errors.mobile && (
              <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>
        </div>

        {/* Row 4 */}
        <div>
          <label className="block text-sm text-cyan-200 mb-1">Address</label>
          <textarea
            name="address"
            rows="2"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
            placeholder="City, State"
          />
        </div>

        {/* Row 5 */}
        <div>
          <label className="block text-sm text-cyan-200 mb-1">
            Occupation*
          </label>
          <select
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none text-white"
          >
            <option value="" className="text-black">
              Select Occupation
            </option>
            <option value="Student" className="text-black">
              Student
            </option>
            <option value="Employee" className="text-black">
              Employee
            </option>
            <option value="Teacher" className="text-black">
              Teacher
            </option>
            <option value="NGO Member" className="text-black">
              NGO Member
            </option>
            <option value="Public" className="text-black">
              Public
            </option>
            <option value="Other" className="text-black">
              Other
            </option>
          </select>
          {form.occupation === "Other" && (
            <input
              name="otherOccupation"
              value={form.otherOccupation}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="Please specify..."
            />
          )}
        </div>

        {/* Row 6 */}
        <div>
          <label className="block text-sm text-cyan-200 mb-2">
            Area of Interest
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Awareness", "interestAwareness"],
              ["Beach Cleanups", "interestCleanup"],
              ["Digital Media", "interestDigital"],
              ["Education", "interestEducation"],
              ["Research", "interestResearch"],
              ["Fundraising", "interestFundraising"],
            ].map(([label, key]) => (
              <label
                key={key}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={key}
                  checked={form[key]}
                  onChange={handleChange}
                  className="accent-cyan-500 w-4 h-4"
                />
                <span className="text-sm text-white/90">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {errors.server && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded">
            {errors.server}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={busy}
          className="w-full py-3 mt-4 rounded font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-50"
        >
          {busy ? "Submitting..." : "Join the Blue Mission"}
        </button>
      </div>
    </div>
  );
}
