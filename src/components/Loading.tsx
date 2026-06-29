"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 600;
    function tick() {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setFade(true), 50);
        setTimeout(() => setShow(false), 350);
      }
    }
    requestAnimationFrame(tick);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center t-bg transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4 w-64">
        {/* 进度条 */}
        <div className="w-full space-y-3">
          <div className="w-full h-1 rounded-full t-card2 overflow-hidden">
            <div
              className="h-full rounded-full t-accent transition-none"
              style={{ width: `${progress}%`, background: "var(--accent)" }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="t-text4 text-xs tracking-wider">Loading</span>
            <span className="t-text4 text-xs tabular-nums">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
