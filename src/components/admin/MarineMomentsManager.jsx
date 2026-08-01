import React, { useEffect, useState } from "react";
import adminApi, { ASSET_ORIGIN } from "../../utils/adminApi";

const EMPTY_FORM = { title: "", description: "", location: "", mediaType: "image" };

export default function MarineMomentsManager() {
  const [moments, setMoments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [files, setFiles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    adminApi
      .get("/marine-moments")
      .then((res) => setMoments(res.data?.data || []))
      .catch(() => setError("Failed to load marine moments"))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this marine moment?")) return;
    await adminApi.delete(`/admin/marine-moments/${id}`);
    load();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (files.length === 0) {
      setError("Please select at least one file");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("location", form.location);
      fd.append("mediaType", form.mediaType);
      files.forEach((f) => fd.append("files", f));

      await adminApi.post("/admin/marine-moments", fd);
      setForm(EMPTY_FORM);
      setFiles([]);
      load();
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to save marine moment");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-lg font-semibold text-white">New Marine Moment</h3>

        {error && <p className="text-sm text-rose-300">{error}</p>}

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />

        <div className="flex items-center gap-4">
          <label className="text-sm text-cyan-100">Type:</label>
          <select
            value={form.mediaType}
            onChange={(e) => setForm({ ...form, mediaType: e.target.value })}
            className="px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white"
          >
            <option value="image" className="text-black">Photo</option>
            <option value="video" className="text-black">Video</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-cyan-100 mb-1">
            Files ({form.mediaType === "video" ? "video file(s)" : "one or more photos"})
          </label>
          <input
            type="file"
            accept={form.mediaType === "video" ? "video/*" : "image/*"}
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="text-sm text-cyan-100"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-semibold disabled:opacity-60"
        >
          {saving ? "Uploading…" : "Post Moment"}
        </button>
      </form>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">All Moments</h3>
        {loading ? (
          <p className="text-cyan-200">Loading…</p>
        ) : moments.length === 0 ? (
          <p className="text-cyan-200">No marine moments posted yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moments.map((m) => (
              <div
                key={m._id}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="h-36 bg-black/30">
                  {m.mediaType === "video" ? (
                    <video src={`${ASSET_ORIGIN}${m.files[0]}`} className="w-full h-full object-cover" muted />
                  ) : (
                    <img
                      src={`${ASSET_ORIGIN}${m.coverImage || m.files[0]}`}
                      alt={m.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-white font-medium truncate">{m.title}</p>
                  <p className="text-xs text-cyan-300/70">{m.files.length} file(s)</p>
                  <button
                    onClick={() => handleDelete(m._id)}
                    className="mt-2 text-sm text-rose-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
