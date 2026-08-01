import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/contants";
import SEO from "../components/SEO";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${BASE_URL}/blogs`)
      .then((res) => {
        if (mounted) setBlogs(res.data?.data || []);
      })
      .catch(() => {
        if (mounted) setError(true);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100">
      <SEO
        title="Blog — Marine Biodiversity Conservation Trust"
        description="Stories, updates, and insights from MBCT's marine conservation work."
        canonical="https://www.marinebiodiversityconservation.com/blog"
      />

      <section className="relative py-16 sm:py-20 px-4 sm:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200 mb-3">
          MBCT Blog
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Stories from the Ocean
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-cyan-100">
          Updates, field notes, and insights from our marine conservation work.
        </p>
      </section>

      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <p className="text-center text-cyan-200 py-10">Loading posts…</p>
          )}

          {!loading && error && (
            <p className="text-center text-rose-300 py-10">
              Couldn&apos;t load blog posts right now. Please try again later.
            </p>
          )}

          {!loading && !error && blogs.length === 0 && (
            <p className="text-center text-cyan-200 py-10">
              No blog posts yet — check back soon.
            </p>
          )}

          {!loading && !error && blogs.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blog/${blog.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg backdrop-blur-sm hover:border-cyan-300/40 transition"
                >
                  {blog.coverImage && (
                    <div className="h-44 w-full overflow-hidden bg-slate-800">
                      <img
                        src={`${BASE_URL.replace(/\/api$/, "")}${blog.coverImage}`}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-200 transition">
                      {blog.title}
                    </h2>
                    <p className="mt-2 text-sm text-cyan-100/80 line-clamp-3">
                      {blog.excerpt || blog.content?.slice(0, 140)}
                    </p>
                    <p className="mt-4 text-xs text-cyan-300/70">
                      {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
