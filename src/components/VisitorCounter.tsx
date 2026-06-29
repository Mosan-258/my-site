"use client";

import { useState, useEffect } from "react";

// Simple visitor counter using localStorage + a fun encoding
// Not accurate for unique visitors, just a fun detail to discover
export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const key = "mo_entropy_visited";
    const countKey = "mo_entropy_visits";
    const current = parseInt(localStorage.getItem(countKey) || "0", 10);
    const newCount = current + 1;
    localStorage.setItem(countKey, String(newCount));
    setCount(newCount);

    // Check if they've "found" the counter before
    setFound(localStorage.getItem(key) === "true");
  }, []);

  function handleClick() {
    localStorage.setItem("mo_entropy_visited", "true");
    setFound(true);
  }

  return (
    <span
      onClick={handleClick}
      className="cursor-default select-none"
      style={{ opacity: found ? 0.15 : 0.04, fontSize: "10px", color: "var(--text5)", transition: "opacity 0.5s" }}
      title={found ? `你来过 ${count} 次了` : undefined}
    >
      {found ? `#${count}` : "·"}
    </span>
  );
}
