import { useEffect, useState } from "react";
import axios from "axios";

export default function MarineNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://back.marinebiodiversityconservation.com/api/all-news",
        );
        setNews(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load marine news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-sky-600">
        🌊 Loading global marine conservation news...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-sky-600 mb-10">
        🌍 Global Marine Conservation News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-lg font-semibold text-[#013d4b]">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mt-3 line-clamp-4">
                {item.summary}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-gray-500">{item.source}</span>

                <a
                  href={item.ogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 font-semibold text-sm hover:underline"
                >
                  Read →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
