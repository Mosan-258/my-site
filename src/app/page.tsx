"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import MessageBoard from "@/components/MessageBoard";
import VisitorCounter from "@/components/VisitorCounter";

const socials = [
  { name: "Bilibili", url: "https://space.bilibili.com/532703242", icon: "B" },
  { name: "X", url: "https://x.com/yangxutao888", icon: "X" },
  { name: "GitHub", url: "https://github.com/Mosan-258", icon: "G" },
];

const likes = ["KFC", "炸鸡", "汉堡", "薯条", "吮指原味鸡（最爱三角）", "士力架", "费列罗", "奥利奥", "牛奶", "无糖可乐", "橙汁", "柑橘"];
const dislikes = ["鱼", "苦瓜"];

const traits = [
  { label: "MBTI", value: "ISTJ-T · 务实灵活型" },
  { label: "性格", value: "外热内冷，害怕犯错" },
  { label: "爱好", value: "打游戏、建模、科技、干饭" },
  { label: "优点", value: "踏实、认真、真诚" },
  { label: "缺点", value: "内向" },
  { label: "特点", value: "慢热" },
  { label: "困扰", value: "自然熟" },
  { label: "害怕", value: "虫子！！！" },
];

function HeroWithCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    function calc() {
      const now = new Date();
      const thisYearTarget = new Date(now.getFullYear(), 6, 7);
      const target = now <= thisYearTarget
        ? thisYearTarget
        : new Date(now.getFullYear() + 1, 6, 7);
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) { setIsPast(true); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  const age = 18;
  const units = [
    { label: "天", value: timeLeft.days },
    { label: "时", value: timeLeft.hours },
    { label: "分", value: timeLeft.minutes },
    { label: "秒", value: timeLeft.seconds },
  ];

  if (isPast) {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 t-glow" style={{ background: "radial-gradient(circle_at_50%_50%, var(--glow), transparent 70%)" }} />
        <div className="relative z-10 space-y-6">
          <p className="text-6xl md:text-8xl">🎂🎉</p>
          <h2 className="text-5xl md:text-7xl font-bold t-accent">生日快乐！</h2>
          <p className="t-text3 text-xl">墨熵 {age} 岁了 🎊</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle_at_50%_30%, var(--glow), transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle_at_30%_70%, var(--glow), transparent 50%)" }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full t-particle animate-pulse"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-10">
        <p className="t-text4 text-sm tracking-[0.3em] uppercase">胡郊灰狼</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight t-text">
          墨<span className="t-accent">熵</span>
        </h1>
        <div className="w-12 h-[2px] t-hero-line rounded-full" />
        <div className="space-y-2">
          <p className="t-text4 text-sm tracking-[0.3em] uppercase">Countdown To</p>
          <p className="text-2xl md:text-3xl font-semibold t-text2">
            <span className="t-accent">{age}</span> 岁生日
          </p>
          <p className="t-text5 text-sm">2026 · 07 · 07</p>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl t-countdown-box flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl md:text-5xl font-bold t-text tabular-nums">
                    {String(u.value).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute -inset-[1px] rounded-2xl pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--accent-bg), transparent)" }} />
              </div>
              <span className="t-text4 text-xs md:text-sm mt-3 tracking-widest uppercase">{u.label}</span>
            </div>
          ))}
        </div>

        <p className="t-text3 text-base md:text-lg max-w-md mx-auto leading-relaxed">
          外热内冷，慢热型选手。喜欢干饭、建模、科技。
        </p>

        <div className="space-y-1 pt-2">
          <p className="t-text5 text-sm">
            {timeLeft.days > 0 ? `还有 ${timeLeft.days} 天` : "就是今天！"}
          </p>
          <p className="t-text5 text-xs">🎂 成年倒计时 · 广西 · 南宁</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 t-gradient-bottom pointer-events-none" />
      <div className="absolute bottom-8 t-bounce text-xs animate-bounce">↓</div>
    </section>
  );
}

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const now = new Date();
    if (now.getMonth() === 6 && now.getDate() === 7) {
      router.replace("/birthday");
    }
  }, []);

  return (
    <div className="min-h-screen t-bg">
      <Nav active="home" />
      <HeroWithCountdown />

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">关于我</h2>
          <div className="grid grid-cols-2 gap-4">
            {[["姓名", "墨熵"], ["性别", "男"], ["年龄", "17岁"], ["生日", "2008.07.07"]].map(([k, v]) => (
              <div key={k} className="p-4 rounded-xl t-card">
                <p className="t-text4 text-xs mb-1">{k}</p>
                <p className="t-text2 text-sm font-medium">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">性格特点</h2>
          <div className="space-y-3">
            {traits.map((t) => (
              <div key={t.label} className="flex items-start gap-4 p-4 rounded-xl t-card">
                <span className="t-text4 text-sm w-12 shrink-0">{t.label}</span>
                <span className="t-text2 text-sm">{t.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4 t-accent">❤️ 喜欢</h2>
            <div className="flex flex-wrap gap-2">
              {likes.map((item) => (
                <span key={item} className="px-3 py-1.5 text-xs rounded-full t-tag">{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 t-text3">💔 不喜欢</h2>
            <div className="flex flex-wrap gap-2">
              {dislikes.map((item) => (
                <span key={item} className="px-3 py-1.5 text-xs rounded-full t-dislike-tag">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">找到我</h2>
          <div className="space-y-3">
            <a href="https://user.qzone.qq.com/2097093469" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors">
              <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm">🐧</span>
              <div>
                <p className="t-text text-sm">QQ</p>
                <p className="t-text4 text-xs">2097093469</p>
              </div>
            </a>
            <a href="mailto:2097093469@qq.com" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors">
              <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm">📧</span>
              <div>
                <p className="t-text text-sm">邮箱</p>
                <p className="t-text4 text-xs">2097093469@qq.com</p>
              </div>
            </a>
            <a href="mailto:yangxutao200877@gmail.com" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors">
              <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm">📧</span>
              <div>
                <p className="t-text text-sm">Gmail</p>
                <p className="t-text4 text-xs">yangxutao200877@gmail.com</p>
              </div>
            </a>
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors" onMouseEnter={() => setHovered(s.name)} onMouseLeave={() => setHovered(null)}>
                <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm font-bold t-text3">{s.icon}</span>
                <div>
                  <p className="t-text text-sm">{s.name}</p>
                  <p className="t-text4 text-xs truncate max-w-xs">{s.url}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <MessageBoard />
      </main>

      <footer className="t-footer py-10 text-center space-y-3">
        <p className="t-text3 text-xs">本网站 100% 由 OpenClaw AI 助手「小小灰」生成</p>
        <p className="t-text4 text-xs">包括页面设计、代码编写、样式调整、部署上线，全部由 AI 完成</p>
        <p className="t-text5 text-xs">人类只负责提供想法和内容，剩下交给 AI</p>
        <div className="pt-3 border-t border-[var(--border)]">
          <p className="t-text4 text-xs">🐱 小小灰 × 墨熵 · 2026 <VisitorCounter /></p>
        </div>
      </footer>
    </div>
  );
}
