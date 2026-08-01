import React, { useEffect, useState } from "react";
import adminApi from "../../utils/adminApi";

export default function DonationsTable() {
  const [donations, setDonations] = useState([]);
  const [summary, setSummary] = useState({ totalAmount: 0, count: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi
      .get("/admin/donations")
      .then((res) => {
        setDonations(res.data?.data || []);
        setSummary(res.data?.summary || { totalAmount: 0, count: 0 });
      })
      .catch(() => setError("Failed to load donations"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-cyan-200">Loading…</p>;
  if (error) return <p className="text-rose-300">{error}</p>;

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-wider text-cyan-300/70">
            Total Raised
          </p>
          <p className="text-3xl font-bold text-white mt-1">
            ₹{summary.totalAmount?.toLocaleString("en-IN") || 0}
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-wider text-cyan-300/70">
            Donations
          </p>
          <p className="text-3xl font-bold text-white mt-1">{summary.count || 0}</p>
        </div>
      </div>

      {donations.length === 0 ? (
        <p className="text-cyan-200">No donations recorded yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-left text-cyan-100">
            <thead className="bg-white/10 text-cyan-200 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Donor</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d._id} className="border-t border-white/10">
                  <td className="px-4 py-3">{d.donorName}</td>
                  <td className="px-4 py-3">{d.donorEmail || "—"}</td>
                  <td className="px-4 py-3">₹{d.amountInr?.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3">{d.status}</td>
                  <td className="px-4 py-3">
                    {new Date(d.createdAt).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
