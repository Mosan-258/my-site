"use client";

import { useTheme } from "@/context/ThemeContext";

export default function AmbientParticles() {
  const { theme } = useTheme();
  if (theme !== "dark") return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${8 + Math.random() * 84}%`,
            top: `${8 + Math.random() * 84}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            backgroundColor: "var(--accent)",
            opacity: 0.08 + Math.random() * 0.07,
            animation: `ambient-float ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 6}s infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ambient-float {
          0% { transform: translate(0, 0); }
          33% { transform: translate(10px, -15px); }
          66% { transform: translate(-8px, 10px); }
          100% { transform: translate(5px, -5px); }
        }
      `}</style>
    </div>
  );
}
