"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export default function Nav({ active }: { active?: string }) {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastY && y > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      setLastY(y);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const links = [
    { href: "/", label: "首页", key: "home" },
    { href: "/about", label: "关于", key: "about" },
    { href: "/news", label: "动态", key: "news" },
    { href: "/case", label: "作品集", key: "case" },
    { href: "/furry", label: "Furry", key: "furry" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "shadow-sm" : ""}`}
      style={{ background: scrolled ? "var(--bg-nav-scroll)" : "var(--bg-nav)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg transition-colors" style={{ color: "var(--text)" }}>
          墨<span style={{ color: "var(--accent)" }}>熵</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="text-sm transition-colors"
              style={active === l.key
                ? { color: "var(--accent)", fontWeight: 500 }
                : { color: "var(--text3)" }
              }
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => {
                if (active !== l.key) e.currentTarget.style.color = "var(--text3)";
              }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors"
            style={{ border: "1px solid var(--border2)", color: "var(--text3)" }}
            title={theme === "dark" ? "切换亮色" : "切换暗色"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors"
            style={{ border: "1px solid var(--border2)" }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-colors"
            style={{ border: "1px solid var(--border2)" }}
          >
            <span className={`block w-4 h-[2px] transition-transform ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} style={{ background: "var(--text)" }} />
            <span className={`block w-4 h-[2px] transition-opacity ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--text)" }} />
            <span className={`block w-4 h-[2px] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} style={{ background: "var(--text)" }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="px-6 pb-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-4 rounded-lg text-sm transition-colors"
              style={active === l.key
                ? { color: "var(--accent)", background: "var(--accent-bg)", fontWeight: 500 }
                : { color: "var(--text3)" }
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
