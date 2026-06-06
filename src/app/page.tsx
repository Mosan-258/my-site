"use client";

import { useState } from "react";

const socials = [
  { name: "Bilibili", url: "https://space.bilibili.com/532703242", icon: "B" },
  { name: "X", url: "https://x.com/yangxutao888", icon: "X" },
  { name: "GitHub", url: "https://github.com/Mosan-258", icon: "G" },
];

const likes = ["KFC", "炸鸡", "汉堡", "薯条", "吮指原味鸡（最爱三角）", "士力架", "费列罗", "奥利奥", "牛奶", "无糖可乐", "橙汁", "柑橘"];
const dislikes = ["鱼", "苦瓜"];

const traits = [
  { label: "性格", value: "外热内冷，害怕犯错" },
  { label: "爱好", value: "打游戏、建模、科技、干饭" },
  { label: "优点", value: "踏实、认真、真诚" },
  { label: "缺点", value: "内向" },
  { label: "特点", value: "慢热" },
  { label: "困扰", value: "自然熟" },
  { label: "害怕", value: "虫子！！！" },
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,120,120,0.08),transparent_60%)]" />
        <div className="relative z-10">
          <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase mb-4">灰狼兽人</p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-4">
            墨<span className="text-zinc-500">熵</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed">
            外热内冷，慢热型选手。喜欢干饭、建模、科技。
          </p>
          <p className="text-zinc-600 text-sm mt-4">广西 · 南宁 · 07.07</p>
        </div>
        <div className="absolute bottom-10 text-zinc-600 text-xs animate-bounce">
          ↓ SCROLL
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-16">
        {/* 个人信息卡片 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">关于我</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["姓名", "墨熵"],
              ["物种", "灰狼"],
              ["性别", "男"],
              ["年龄", "17岁"],
              ["生日", "2008.07.07"],
              ["QQ", "2097093469"],
            ].map(([k, v]) => (
              <div key={k} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <p className="text-zinc-500 text-xs mb-1">{k}</p>
                <p className="text-zinc-200 text-sm font-medium">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 特点 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">性格特点</h2>
          <div className="space-y-3">
            {traits.map((t) => (
              <div key={t.label} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 text-sm w-12 shrink-0">{t.label}</span>
                <span className="text-zinc-300 text-sm">{t.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 喜欢 & 不喜欢 */}
        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">❤️ 喜欢</h2>
            <div className="flex flex-wrap gap-2">
              {likes.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-full bg-white/10 text-zinc-200 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-zinc-400">💔 不喜欢</h2>
            <div className="flex flex-wrap gap-2">
              {dislikes.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 社交链接 */}
        <section>
          <h2 className="text-2xl font-bold mb-6">找到我</h2>
          <div className="space-y-3">
            <a
              href="mailto:2097093469@qq.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-sm">📧</span>
              <div>
                <p className="text-zinc-200 text-sm">邮箱</p>
                <p className="text-zinc-500 text-xs">2097093469@qq.com</p>
              </div>
            </a>
            <a
              href="mailto:yangxutao200877@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-sm">📧</span>
              <div>
                <p className="text-zinc-200 text-sm">Gmail</p>
                <p className="text-zinc-500 text-xs">yangxutao200877@gmail.com</p>
              </div>
            </a>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors"
                onMouseEnter={() => setHovered(s.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-sm font-bold">
                  {s.icon}
                </span>
                <div>
                  <p className="text-zinc-200 text-sm">{s.name}</p>
                  <p className="text-zinc-500 text-xs truncate max-w-xs">{s.url}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-10 text-center space-y-3">
        <p className="text-zinc-400 text-xs">本网站 100% 由 OpenClaw AI 助手「小小灰」生成</p>
        <p className="text-zinc-500 text-xs">包括页面设计、代码编写、样式调整、部署上线，全部由 AI 完成</p>
        <p className="text-zinc-600 text-xs">人类只负责提供想法和内容，剩下交给 AI</p>
        <div className="pt-3 border-t border-zinc-800/30">
          <p className="text-zinc-500 text-xs">🐱 小小灰 × 墨熵 · 2026</p>
        </div>
      </footer>
    </div>
  );
}
