// src/components/Opine.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://back.marinebiodiversityconservation.com";

axios.defaults.baseURL = API_BASE;
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function Opine() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState(null);

  async function loadPosts() {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/opine?limit=20");
      const data = Array.isArray(res.data) ? res.data : res.data.data || [];
      setPosts(data);
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.error || err.response?.data?.message || err.message;
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function publish() {
    setError(null);
    if (!title.trim() || !content.trim()) {
      setError("Please fill title and content.");
      return;
    }
    setPublishing(true);

    try {
      const res = await axios.post("/api/opine", {
        title: title.trim(),
        body: content.trim(),
        tags: [],
      });

      const created = res.data.data || res.data;
      setPosts((prev) => [created, ...prev]);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("publish error:", err);
      const msg =
        err.response?.data?.error || err.response?.data?.message || err.message;
      setError(msg);
    } finally {
      setPublishing(false);
    }
  }

  async function likePost(id) {
    try {
      const res = await axios.post(`/api/opine/${id}/like`);
      const updated = res.data;
      setPosts((prev) =>
        prev.map((p) => (p._id === updated._id ? updated : p))
      );
    } catch (err) {
      console.error(err);
      setError("Like failed");
    }
  }

  async function deletePost(id) {
    if (!window.confirm("Delete this post?")) return;

    try {
      await axios.delete(`/api/opine/${id}`);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      setError("Delete failed");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-teal-700">
        Opine Share Your Thoughts
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-6">
        Write your opinions or articles about marine biodiversity.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl shadow mb-8">
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border rounded mb-3 bg-[#2f2f2f] text-white"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write..."
          rows="8"
          className="w-full p-2 border rounded mb-3 bg-[#2f2f2f] text-white"
        />

        <button
          onClick={publish}
          disabled={publishing}
          className={`px-6 py-2 rounded-full text-white ${
            publishing ? "bg-gray-500" : "bg-teal-600 hover:bg-teal-700"
          }`}
        >
          {publishing ? "Publishing…" : "Publish"}
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>

      {loading ? (
        <p>Loading…</p>
      ) : posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((p) => (
            <div key={p._id} className="p-4 border rounded-xl bg-white shadow">
              <h3 className="text-xl text-sky-600 font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-700 whitespace-pre-line">{p.body}</p>
              <div className="mt-2 text-xs text-gray-500">
                {new Date(p.createdAt).toLocaleString()}
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => likePost(p._id)}
                  className="px-3 py-1 border text-black rounded"
                >
                  👍 {p.likes || 0}
                </button>
                <button
                  onClick={() => deletePost(p._id)}
                  className="px-3 py-1 border rounded text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
