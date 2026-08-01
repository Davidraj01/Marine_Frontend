import React, { useEffect, useState } from "react";
import adminApi from "../../utils/adminApi";

export default function VisitorsPanel() {
  const [total, setTotal] = useState(0);
  const [daily, setDaily] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi
      .get("/admin/visitors")
      .then((res) => {
        setTotal(res.data?.total || 0);
        setDaily(res.data?.daily || []);
      })
      .catch(() => setError("Failed to load visitor stats"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-cyan-200">Loading…</p>;
  if (error) return <p className="text-rose-300">{error}</p>;

  const maxCount = Math.max(1, ...daily.map((d) => d.count));

  return (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-xs">
        <p className="text-xs uppercase tracking-wider text-cyan-300/70">
          Total Visitors (all time)
        </p>
        <p className="text-3xl font-bold text-white mt-1">
          {total.toLocaleString("en-IN")}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Last 30 Days</h3>
        {daily.length === 0 ? (
          <p className="text-cyan-200">No visits recorded in the last 30 days.</p>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-end gap-1.5 h-40">
              {daily.map((d) => (
                <div
                  key={d.date}
                  className="flex-1 flex flex-col items-center justify-end group relative"
                  title={`${d.date}: ${d.count}`}
                >
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-cyan-500 to-emerald-400"
                    style={{ height: `${(d.count / maxCount) * 100}%`, minHeight: 2 }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-cyan-300/60 mt-2">
              <span>{daily[0]?.date}</span>
              <span>{daily[daily.length - 1]?.date}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
