import React, { useEffect, useState } from "react";
import adminApi from "../../utils/adminApi";

export default function DocumentsManager() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    adminApi
      .get("/documents")
      .then((res) => setDocs(res.data?.data || []))
      .catch(() => setError("Failed to load documents"))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this document?")) return;
    await adminApi.delete(`/admin/documents/${id}`);
    load();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!file) {
      setError("Please choose a PDF or Word document");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", title || file.name);
      fd.append("category", category);
      fd.append("file", file);

      await adminApi.post("/admin/documents", fd);
      setTitle("");
      setCategory("");
      setFile(null);
      load();
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to upload document");
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
        <h3 className="text-lg font-semibold text-white">
          Upload Document (Admin&apos;s Lounge)
        </h3>

        {error && <p className="text-sm text-rose-300">{error}</p>}

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />
        <input
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />

        <div>
          <label className="block text-sm text-cyan-100 mb-1">
            PDF / DOC / DOCX (max 15MB)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="text-sm text-cyan-100"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-semibold disabled:opacity-60"
        >
          {saving ? "Uploading…" : "Upload Document"}
        </button>
      </form>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">All Documents</h3>
        {loading ? (
          <p className="text-cyan-200">Loading…</p>
        ) : docs.length === 0 ? (
          <p className="text-cyan-200">No documents uploaded yet.</p>
        ) : (
          <div className="space-y-3">
            {docs.map((d) => (
              <div
                key={d._id}
                className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="min-w-0">
                  <p className="text-white font-medium truncate">{d.title}</p>
                  <p className="text-xs text-cyan-300/70">
                    {d.originalName} · {(d.size / 1024).toFixed(0)} KB
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="px-3 py-1.5 rounded-md border border-rose-400/40 text-rose-300 text-sm flex-shrink-0"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
