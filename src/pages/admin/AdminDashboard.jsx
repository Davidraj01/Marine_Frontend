import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisitorsPanel from "../../components/admin/VisitorsPanel";
import BlogsManager from "../../components/admin/BlogsManager";
import MarineMomentsManager from "../../components/admin/MarineMomentsManager";
import DocumentsManager from "../../components/admin/DocumentsManager";
import DonationsTable from "../../components/admin/DonationsTable";

const TABS = [
  { id: "visitors", label: "Overview" },
  { id: "blogs", label: "Blogs" },
  { id: "moments", label: "Marine Moments" },
  { id: "documents", label: "Admin's Lounge" },
  { id: "donations", label: "Donations" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("visitors");

  const handleLogout = () => {
    localStorage.removeItem("mbct_admin_token");
    navigate("/admin/login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00121a] via-[#002b3a] to-[#00121a] text-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md border border-white/20 text-white text-sm hover:bg-white/10"
          >
            Log Out
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                tab === t.id
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-400 text-black"
                  : "text-cyan-200 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "visitors" && <VisitorsPanel />}
        {tab === "blogs" && <BlogsManager />}
        {tab === "moments" && <MarineMomentsManager />}
        {tab === "documents" && <DocumentsManager />}
        {tab === "donations" && <DonationsTable />}
      </div>
    </main>
  );
}
