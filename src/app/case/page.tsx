"use client";

import Nav from "@/components/Nav";
import Link from "next/link";

const githubProjects = [
  {
    name: "my-site",
    desc: "个人主页，Next.js + Tailwind CSS",
    url: "https://github.com/Mosan-258/my-site",
    lang: "TypeScript",
  },
  {
    name: "kanshen-meme",
    desc: "看图说话表情包生成器",
    url: "https://github.com/Mosan-258/kanshen-meme",
    lang: "Python",
  },
  {
    name: "mimo-skills-loader",
    desc: "期末周已破防，闲着没事做的 → MiMo AI 技能加载器 + 考试周破防 Skill",
    url: "https://github.com/Mosan-258/mimo-skills-loader",
    lang: "Python",
  },
  {
    name: "winget-gui",
    desc: "Windows 软件管理 GUI",
    url: "https://github.com/Mosan-258/winget-gui",
    lang: "C#",
  },
];

export default function Case() {
  return (
    <div className="min-h-screen t-bg">
      <Nav active="case" />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 space-y-16">
        <section>
          <h1 className="text-4xl font-bold mb-4 t-text">作品集</h1>
          <p className="t-text3 text-lg">3D 建模作品和开源项目。</p>
        </section>

        {/* Blender 作品 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">🎨 Blender 3D 作品</h2>
          <div className="p-8 rounded-xl t-card text-center">
            <p className="text-5xl mb-4">🫠</p>
            <p className="t-text3 text-lg mb-2">还没有拿的出手的东西,,ԾㅂԾ,,</p>
            <p className="t-text4 text-sm">正在努力学习中，敬请期待...</p>
          </div>
        </section>

        {/* GitHub 项目 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">💻 GitHub 项目</h2>
          <div className="grid gap-4">
            {githubProjects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl t-card hover:border-[var(--accent-border)] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="t-text font-medium">{p.name}</h3>
                  <span className="px-2 py-0.5 rounded t-accent-bg t-accent text-xs">{p.lang}</span>
                </div>
                <p className="t-text3 text-sm">{p.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://github.com/Mosan-258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg t-btn-outline text-sm transition-colors"
            >
              查看更多 →
            </a>
          </div>
        </section>
      </main>

      <footer className="t-footer py-10 text-center space-y-3">
        <p className="t-text3 text-xs">本网站 100% 由 OpenClaw AI 助手「小小灰」生成</p>
        <p className="t-text4 text-xs">包括页面设计、代码编写、样式调整、部署上线，全部由 AI 完成</p>
        <p className="t-text5 text-xs">人类只负责提供想法和内容，剩下交给 AI</p>
        <div className="pt-3 border-t border-[var(--border)]">
          <p className="t-text4 text-xs">🐱 小小灰 × 墨熵 · 2026</p>
        </div>
      </footer>
    </div>
  );
}
