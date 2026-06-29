"use client";

import { useEffect, useState } from "react";

interface Ribbon {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  width: number;
  height: number;
  rotation: number;
}

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];

function getBirthdayProgress(): number {
  const now = new Date();
  const year = now.getMonth() >= 6 && now.getDate() >= 7
    ? now.getFullYear() + 1
    : now.getFullYear();
  const birthday = new Date(year, 6, 7); // July 7
  const totalDays = (birthday.getTime() - new Date(year - 1, 6, 7).getTime()) / 86400000;
  const daysLeft = (birthday.getTime() - now.getTime()) / 86400000;
  const progress = 1 - daysLeft / totalDays;
  return Math.max(0.1, Math.min(1, progress));
}

export default function Confetti() {
  const [ribbons, setRibbons] = useState<Ribbon[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const p = getBirthdayProgress();
    setProgress(p);

    const count = Math.floor(p * 18) + 3;
    const newRibbons: Ribbon[] = [];
    for (let i = 0; i < count; i++) {
      newRibbons.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        width: 6 + Math.random() * 8,
        height: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
      });
    }
    setRibbons(newRibbons);
  }, []);

  if (progress < 0.05) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      {ribbons.map((r) => (
        <div
          key={r.id}
          className="absolute opacity-60"
          style={{
            left: `${r.x}%`,
            top: "-40px",
            width: `${r.width}px`,
            height: `${r.height}px`,
            backgroundColor: r.color,
            borderRadius: "2px",
            transform: `rotate(${r.rotation}deg)`,
            animation: `confetti-fall ${r.duration}s linear ${r.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-40px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
