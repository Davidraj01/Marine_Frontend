import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSend, IoClose, IoChatbubblesOutline } from "react-icons/io5";

const OceanAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "I am the Ocean. 🌊 Whatever you ask, I shall answer from the depths of time.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      // Use production URL if deployed, else localhost
      const API_URL = import.meta.env.PROD 
        ? "https://back.marinebiodiversityconservation.com/api/ai/chat"
        : "http://localhost:5173/api/ai/chat";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { role: "model", text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: err.message || "The currents are strong today... Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 🗨️ Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] sm:w-[400px] h-[500px] bg-gradient-to-b from-[#001e2b] to-[#00121a] rounded-2xl shadow-2xl border border-sky-500/30 overflow-hidden flex flex-col mb-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90"
          >
            {/* Header */}
            <div className="bg-[#002b3e] p-4 flex items-center justify-between border-b border-sky-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-bold text-sky-100">The Ocean</h3>
                  <p className="text-xs text-sky-400/80">Ancient & Wise</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sky-400 hover:text-white transition"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-md ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-br-none"
                        : "bg-[#00384d] text-sky-100 border border-sky-500/20 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-2 p-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce delay-200" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-[#001e2b] border-t border-sky-500/20">
              <div className="flex items-center gap-2 bg-[#00121a] rounded-full px-4 py-2 border border-sky-500/30 focus-within:border-sky-400 transition">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask the ocean..."
                  className="flex-1 bg-transparent text-white placeholder-sky-500/50 outline-none text-sm"
                  disabled={loading}
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="text-sky-400 hover:text-white disabled:opacity-50 transition"
                >
                  <IoSend size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔘 Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)] border-2 border-white/20 relative group"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:animate-ping" />
        
        {isOpen ? <IoClose size={28} /> : <IoChatbubblesOutline size={28} />}
      </motion.button>
    </div>
  );
};

export default OceanAI;
