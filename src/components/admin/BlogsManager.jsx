import React, { useEffect, useState } from "react";
import adminApi, { ASSET_ORIGIN } from "../../utils/adminApi";

const EMPTY_FORM = {
  title: "",
  excerpt: "",
  content: "",
  tags: "",
  published: true,
};

export default function BlogsManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [coverFile, setCoverFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    adminApi
      .get("/admin/blogs")
      .then((res) => setBlogs(res.data?.data || []))
      .catch(() => setError("Failed to load blogs"))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setCoverFile(null);
    setEditingId(null);
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setForm({
      title: blog.title,
      excerpt: blog.excerpt || "",
      content: blog.content,
      tags: (blog.tags || []).join(", "),
      published: blog.published,
    });
    setCoverFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this blog post?")) return;
    await adminApi.delete(`/admin/blogs/${id}`);
    load();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("excerpt", form.excerpt);
      fd.append("content", form.content);
      fd.append("tags", form.tags);
      fd.append("published", form.published);
      if (coverFile) fd.append("coverImage", coverFile);

      if (editingId) {
        await adminApi.put(`/admin/blogs/${editingId}`, fd);
      } else {
        await adminApi.post("/admin/blogs", fd);
      }
      resetForm();
      load();
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to save blog post");
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
          {editingId ? "Edit Blog Post" : "New Blog Post"}
        </h3>

        {error && <p className="text-sm text-rose-300">{error}</p>}

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />
        <input
          placeholder="Excerpt (short summary, optional)"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          rows={8}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />
        <input
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/30"
        />

        <div>
          <label className="block text-sm text-cyan-100 mb-1">
            Cover image {editingId ? "(leave empty to keep current)" : ""}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
            className="text-sm text-cyan-100"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-cyan-100">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
          Published
        </label>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-semibold disabled:opacity-60"
          >
            {saving ? "Saving…" : editingId ? "Update Post" : "Publish Post"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2 rounded-md border border-white/20 text-white"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">All Posts</h3>
        {loading ? (
          <p className="text-cyan-200">Loading…</p>
        ) : blogs.length === 0 ? (
          <p className="text-cyan-200">No blog posts yet.</p>
        ) : (
          <div className="space-y-3">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {blog.coverImage && (
                    <img
                      src={`${ASSET_ORIGIN}${blog.coverImage}`}
                      alt=""
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="text-white font-medium truncate">{blog.title}</p>
                    <p className="text-xs text-cyan-300/70">
                      {blog.published ? "Published" : "Draft"} · /blog/{blog.slug}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-3 py-1.5 rounded-md border border-white/20 text-white text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1.5 rounded-md border border-rose-400/40 text-rose-300 text-sm"
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
