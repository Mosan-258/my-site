"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [catPos, setCatPos] = useState(50);
  const [caught, setCaught] = useState(false);

  useEffect(() => {
    if (caught) return;
    const interval = setInterval(() => {
      setCatPos((prev) => {
        const next = prev + (Math.random() > 0.5 ? 3 : -3);
        return Math.max(10, Math.min(90, next));
      });
    }, 150);
    return () => clearInterval(interval);
  }, [caught]);

  return (
    <div className="min-h-screen t-bg flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-8 max-w-md">
        {/* 404 大字 */}
        <div>
          <h1 className="text-8xl font-bold t-accent">404</h1>
          <p className="t-text3 text-lg mt-2">页面走丢了</p>
        </div>

        {/* 猫咪抓取游戏 */}
        <div className="relative h-20 rounded-xl t-card overflow-hidden select-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="t-text5 text-xs">抓住这只猫试试 ↓</span>
          </div>
          <div
            className="absolute bottom-2 text-3xl cursor-pointer transition-all"
            style={{ left: `${catPos}%`, transform: "translateX(-50%)" }}
            onClick={() => setCaught(true)}
          >
            {caught ? "😺" : "🐱"}
          </div>
        </div>

        {caught ? (
          <div className="space-y-4 animate-pulse">
            <p className="t-text2 text-sm">抓到了！猫咪带你回家 🏠</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg t-btn text-sm font-medium transition-colors"
            >
              回到首页 →
            </Link>
          </div>
        ) : (
          <p className="t-text4 text-xs">（点一下猫咪就能回家）</p>
        )}
      </div>
    </div>
  );
}
