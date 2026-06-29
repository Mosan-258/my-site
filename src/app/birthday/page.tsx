"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const MESSAGES = [
  "🎂 生日快乐！",
  "今天是属于你的日子",
  "又长大一岁啦",
  "愿所有美好如期而至",
  "继续加油，墨熵 🎉",
];

function Firework({ x, y }: { x: number; y: number }) {
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30) * Math.PI / 180;
    const dist = 30 + Math.random() * 40;
    return {
      tx: Math.cos(angle) * dist,
      ty: Math.sin(angle) * dist,
      color: ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"][i % 7],
      delay: Math.random() * 0.2,
    };
  });

  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y }}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: p.color,
            animation: `fw-particle 0.8s ease-out ${p.delay}s forwards`,
            ["--tx" as string]: `${p.tx}px`,
            ["--ty" as string]: `${p.ty}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function Birthday() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [showCandles, setShowCandles] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [fireworks, setFireworks] = useState<{ x: number; y: number; id: number }[]>([]);
  const [showSurprise, setShowSurprise] = useState(false);
  const { theme } = useTheme();
  const fwId = useRef(0);

  useEffect(() => {
    setTimeout(() => setShowCandles(true), 800);
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fireworks after blowing candles
  useEffect(() => {
    if (!candlesBlown) return;
    const interval = setInterval(() => {
      const id = fwId.current++;
      setFireworks((prev) => [
        ...prev.slice(-8),
        { x: 10 + Math.random() * 80, y: 10 + Math.random() * 60, id },
      ]);
    }, 600);
    // Show surprise after 4 seconds
    const timer = setTimeout(() => setShowSurprise(true), 4000);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, [candlesBlown]);

  // Check if it's actually July 7
  const now = new Date();
  const isBirthday = now.getMonth() === 6 && now.getDate() === 7;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              backgroundColor: ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"][i % 7],
              opacity: 0.2,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Fireworks */}
      {fireworks.map((fw) => (
        <Firework key={fw.id} x={fw.x} y={fw.y} />
      ))}

      <div className="relative z-10 space-y-8 max-w-md">
        {/* Cake */}
        <div className="text-8xl">🎂</div>

        {/* Candles */}
        {showCandles && !candlesBlown && (
          <div className="flex justify-center gap-4">
            {["🕯️", "🕯️", "🕯️"].map((c, i) => (
              <span
                key={i}
                className="text-3xl animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Blow button */}
        {showCandles && !candlesBlown && (
          <button
            onClick={() => setCandlesBlown(true)}
            className="px-6 py-2.5 rounded-lg text-sm font-medium animate-bounce"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            许个愿，吹蜡烛 🌬️
          </button>
        )}

        {/* After blowing */}
        {candlesBlown && !showSurprise && (
          <div className="space-y-4">
            <p className="text-4xl">🎉🎈🎊</p>
            <p className="text-xl font-bold" style={{ color: "var(--text)" }}>
              你 18 岁了！
            </p>
          </div>
        )}

        {/* Surprise! */}
        {showSurprise && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-6xl">🎁</div>
            <p className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              成年快乐！
            </p>
            <p className="text-sm" style={{ color: "var(--text3)" }}>
              从今天起，你可以做更多事了
            </p>
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-sm" style={{ color: "var(--text2)" }}>
                18 岁寄语：
              </p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text3)" }}>
                成年不是终点，是新的起点。<br/>
                继续做喜欢的事，成为想成为的人。<br/>
                技术会越来越强，未来可期。🌟
              </p>
            </div>
          </div>
        )}

        {/* Message carousel */}
        <div className="h-12 flex items-center justify-center">
          <p
            key={msgIndex}
            className="text-xl font-bold animate-fade-in"
            style={{ color: "var(--text)" }}
          >
            {MESSAGES[msgIndex]}
          </p>
        </div>

        {/* Back home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          回到首页 →
        </Link>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-20px) scale(1.2); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fw-particle {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
