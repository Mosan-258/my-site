"use client";

import { useState, useEffect } from "react";

interface Message {
  name: string;
  content: string;
  time: string;
}

const STORAGE_KEY = "***";

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setMessages(JSON.parse(saved)); } catch {}
    }
  }, []);

  function submit() {
    if (!name.trim() || !content.trim()) return;
    if (content.length > 1024) return;
    const now = new Date();
    const time = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const newMsg: Message = { name: name.trim(), content: content.trim(), time };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setContent("");
  }

  if (!mounted) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold t-text">💬 留言板</h2>

      <div className="p-5 rounded-2xl t-card space-y-3">
        <input
          type="text"
          placeholder="你的名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          className="w-full px-4 py-2.5 rounded-lg t-card2 t-text text-sm placeholder-[var(--text5)] focus:outline-none focus:border-[var(--accent-border)] transition-colors"
          style={{ border: "1px solid var(--border2)" }}
        />
        <textarea
          placeholder="说点什么吧...（最多1024字）"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={1024}
          rows={3}
          className="w-full px-4 py-2.5 rounded-lg t-card2 t-text text-sm placeholder-[var(--text5)] focus:outline-none focus:border-[var(--accent-border)] transition-colors resize-none"
          style={{ border: "1px solid var(--border2)" }}
        />
        <div className="flex items-center justify-between">
          <span className="t-text5 text-xs">{content.length}/1024</span>
          <button
            onClick={submit}
            disabled={!name.trim() || !content.trim()}
            className="px-5 py-2 rounded-lg t-btn disabled:opacity-40 text-sm font-medium transition-colors"
          >
            留言
          </button>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className="p-4 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <span className="t-accent text-sm font-medium">{msg.name}</span>
                <span className="t-text5 text-xs">{msg.time}</span>
              </div>
              <p className="t-text2 text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
            </div>
          ))}
        </div>
      )}

      {messages.length === 0 && (
        <p className="t-text4 text-sm text-center py-4">还没有留言，来第一条吧 ~</p>
      )}
    </section>
  );
}
