// src/components/ApplicationForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { FaTimes, FaPaperclip } from "react-icons/fa";

export default function ApplicationForm({
  apiBase = "https://back.marinebiodiversityconservation.com/api", // 👈 change to your constant if needed
  roleId = "",
  roleTitle = "",
  defaultCategory = "jobs", // "jobs" | "internships" | "trainee"
  onClose,
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: defaultCategory,
  });
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    setFile(f || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill all required fields.");
      return;
    }
    if (!file) {
      setError("Please upload your resume (PDF, DOC, DOCX).");
      return;
    }

    const data = new FormData();
    data.append("name", form.name.trim());
    data.append("email", form.email.trim());
    data.append("phone", form.phone.trim());
    data.append("category", form.category || "jobs");
    data.append("roleId", roleId || "");
    data.append("roleTitle", roleTitle || "");
    data.append("resume", file);

    try {
      setBusy(true);
      const resp = await axios.post(`${apiBase}/apply`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (resp?.data?.ok) {
        setDone(true);
        if (onSuccess) onSuccess(resp.data);
      } else {
        setError(resp?.data?.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message || "Server error. Please try again later.",
      );
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
        <div className="w-full max-w-md rounded-2xl bg-[#001921] p-6 border border-white/10 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Application received 🎉
          </h3>
          <p className="text-sm text-cyan-200 mb-4">
            Thank you for applying{roleTitle ? ` for ${roleTitle}` : ""}. Our
            team will review your profile and get back to you shortly.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white text-[#00121a] text-sm font-semibold hover:bg-cyan-100"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-[#001921] border border-white/15 p-6 shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-cyan-100"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
          Apply {roleTitle ? `for ${roleTitle}` : ""}
        </h3>
        <p className="text-xs text-cyan-200 mb-4">
          Fill in your details and upload your resume. Required fields are
          marked with *.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs text-cyan-200 mb-1">
              Full name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Mhd Muzammil"
              className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-cyan-200 mb-1">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-xs text-cyan-200 mb-1">
                Phone *
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
            </div>
          </div>

          {/* Category */}
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-cyan-200 mb-1">
                Applying as *
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="jobs">Job</option>
                <option value="internships">Internship</option>
                <option value="trainee">Trainee</option>
              </select>
            </div>

            {roleTitle && (
              <div>
                <label className="block text-xs text-cyan-200 mb-1">
                  Position
                </label>
                <input
                  disabled
                  value={roleTitle}
                  className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-xs text-cyan-100"
                />
              </div>
            )}
          </div>

          {/* Resume */}
          <div>
            <label className="block text-xs text-cyan-200 mb-1">
              Resume (PDF, DOC, DOCX) *
            </label>
            <label className="flex items-center gap-2 rounded-md bg-white/5 border border-dashed border-cyan-300/60 px-3 py-2 text-xs text-cyan-100 cursor-pointer hover:bg-white/10">
              <FaPaperclip className="text-sm" />
              <span className="truncate">
                {file ? file.name : "Choose file…"}
              </span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
              />
            </label>
            <p className="mt-1 text-[10px] text-cyan-300/80">
              Max size: 5MB. Make sure your resume is updated.
            </p>
          </div>

          {error && <p className="text-xs text-rose-300">{error}</p>}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-white/20 text-xs text-cyan-100 hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={busy}
              className={`px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#0077b6] ${
                busy ? "opacity-60" : "hover:opacity-95"
              }`}
            >
              {busy ? "Submitting..." : "Submit application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
