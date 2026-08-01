import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/contants";
import SEO from "../components/SEO";

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setNotFound(false);
    axios
      .get(`${BASE_URL}/blogs/${slug}`)
      .then((res) => {
        if (mounted) setBlog(res.data);
      })
      .catch(() => {
        if (mounted) setNotFound(true);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100 flex items-center justify-center">
        <p className="text-cyan-200">Loading…</p>
      </main>
    );
  }

  if (notFound || !blog) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-3">Post not found</h1>
        <p className="text-cyan-200 mb-6">
          This blog post may have been removed or never existed.
        </p>
        <Link
          to="/blog"
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-black font-semibold"
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  const coverUrl = blog.coverImage
    ? `${BASE_URL.replace(/\/api$/, "")}${blog.coverImage}`
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100">
      <SEO
        title={`${blog.title} — MBCT Blog`}
        description={blog.excerpt || blog.title}
        canonical={`https://www.marinebiodiversityconservation.com/blog/${blog.slug}`}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <Link to="/blog" className="text-sm text-cyan-300 hover:text-cyan-100">
          ← Back to Blog
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          {blog.title}
        </h1>

        <p className="mt-3 text-sm text-cyan-300/80">
          By {blog.authorName || "MBCT Team"} ·{" "}
          {new Date(blog.createdAt).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        {coverUrl && (
          <div className="mt-8 rounded-2xl overflow-hidden">
            <img src={coverUrl} alt={blog.title} className="w-full object-cover" />
          </div>
        )}

        <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-200 whitespace-pre-wrap">
          {blog.content}
        </div>

        {blog.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-100"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
