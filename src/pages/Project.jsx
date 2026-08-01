/*
EBoard.jsx — Asset-only with Content-Type check before preview
Drop into your project and use like your previous component.
*/

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import MarineNews from './MarineNews';
import { BASE_URL } from "../utils/contants";

const ASSET_ORIGIN = BASE_URL.replace(/\/api$/, "");

// format date helper
const formatDate = (d) => {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(d));
  } catch {
    return d;
  }
};

export default function EBoard() {
  const [selected, setSelected] = useState(null);
  const [checking, setChecking] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${BASE_URL}/documents`)
      .then((res) => {
        if (!mounted) return;
        const docs = (res.data?.data || []).map((d) => ({
          id: d._id,
          title: d.title,
          filename: d.originalName,
          url: `${ASSET_ORIGIN}/uploads/documents/${d.storedName}`,
          downloadUrl: `${ASSET_ORIGIN}/api/documents/${d._id}/download`,
          date: d.createdAt,
        }));
        setDocuments(docs);
      })
      .catch(() => {
        // leave documents empty on failure
      });
    return () => {
      mounted = false;
    };
  }, []);

  const issues = useMemo(
    () =>
      [...documents].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)),
    [documents]
  );

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Main safe view handler:
  // - checks HEAD Content-Type
  // - if application/pdf => open modal
  // - otherwise open in new tab (safer than embedding HTML)
  async function handleView(issue) {
    setErrorMsg("");
    setChecking(true);

    try {
      // Try HEAD first (fast). Some servers may block HEAD; then fallback to GET with no body.
      let res;
      try {
        res = await fetch(issue.url, { method: "HEAD" });
      } catch (headErr) {
        // HEAD failed; try GET but don't read body
        res = await fetch(issue.url, { method: "GET" });
      }

      const ct = res.headers.get("content-type") || "";
      // Debug help (open console to see)
      console.log(`[EBoard] HEAD result for ${issue.url}`, {
        ok: res.ok,
        status: res.status,
        contentType: ct,
      });

      // If the server returned HTML (index.html) or any non-PDF, fallback to opening in new tab
      if (!res.ok) {
        setErrorMsg(
          "Resource not found (status " + res.status + "). Opening in new tab."
        );
        window.open(issue.url, "_blank", "noopener");
      } else if (ct.includes("application/pdf")) {
        setSelected(issue);
      } else {
        // Not a PDF — likely index.html rewrite. Open in new tab (so user can inspect).
        setErrorMsg("Resource is not a PDF — opened in a new tab instead.");
        window.open(issue.url, "_blank", "noopener");
      }
    } catch (err) {
      console.error("[EBoard] preview check failed:", err);
      setErrorMsg("Failed to check resource. Opened in new tab.");
      window.open(issue.url, "_blank", "noopener");
    } finally {
      setChecking(false);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-sky-600">Admin's Lounge</h1>
            <p className="text-sm text-slate-500 mt-1">
              Click View to preview. If resource isn't a PDF we open it in a new
              tab.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 text-sm text-rose-600">{errorMsg}</div>
          )}

          {issues.length === 0 ? (
            <div className="text-center py-16 border rounded-2xl border-dashed">
              <p className="text-slate-500">
                No documents yet. Upload one from the admin panel.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((issue) => (
                <div
                  key={issue.id}
                  className="p-5 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-20 bg-teal-50 text-sky-600 font-semibold flex items-center justify-center rounded-md">
                      PDF
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">
                        {issue.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {formatDate(issue.date)}
                      </p>

                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => handleView(issue)}
                          disabled={checking}
                          className="px-4 py-1.5 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-900 transition disabled:opacity-60"
                        >
                          {checking ? "Checking..." : "View"}
                        </button>

                        <a
                          href={issue.downloadUrl}
                          className="px-4 py-1.5 rounded-md border text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Preview modal */}
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setSelected(null)}
              />
              <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                  <div>
                    <h2 className="font-semibold text-slate-800">
                      {selected.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {formatDate(selected.date)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-md border bg-slate-600 text-sm hover:bg-gray-900"
                    >
                      Open in new tab
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-3 py-1 rounded-md bg-slate-600 text-sm hover:bg-slate-900"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="w-full h-[calc(100%-64px)] bg-white">
                  <object
                    data={selected.url}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  >
                    <div className="flex flex-col items-center justify-center h-full text-slate-900">
                      <p className="mb-4">
                        PDF cannot be displayed inline. Click below to open.
                      </p>
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-sky-600 text-white rounded-md"
                      >
                        Open PDF
                      </a>
                    </div>
                  </object>
                </div>
              </div>
            </div>
          )}
          <MarineNews />
        </div>
      </div>
    </>
  );
}
