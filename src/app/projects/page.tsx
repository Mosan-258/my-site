import Nav from "@/components/Nav";
import Link from "next/link";

const projects = [
  {
    name: "AI一键下载",
    version: "v0.04",
    description: "基于 winget 的智能软件下载管理器，支持 100+ 常用软件一键搜索和安装",
    features: [
      "🔍 中英文智能搜索",
      "📦 10 大分类，100+ 常用软件",
      "⚡ 一键安装",
      "⏸️ 暂停/继续/取消",
      "📊 实时进度条",
      "🎨 黑白简约界面",
    ],
    tech: ["Python", "tkinter", "winget", "PyInstaller"],
    github: "https://github.com/Mosan-258/AI-",
    status: "已发布",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <Nav />

      {/* Header */}
      <header className="pt-20 pb-12 px-6 text-center">
        <Link
          href="/"
          className="text-zinc-500 text-sm hover:text-red-900 transition-colors"
        >
          ← 返回首页
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-6">
          项<span className="text-red-900">目</span>
        </h1>
        <p className="text-zinc-500 text-sm mt-4">用 AI 做的一些好玩的东西</p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-900/60 transition-colors"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="text-zinc-500 text-sm mt-1">{project.version}</p>
              </div>
              <span className="px-3 py-1 text-xs rounded-full bg-red-950/80 text-red-200 border border-red-900/40">
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="text-zinc-400 text-sm"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-colors"
              >
                <span className="font-bold">G</span>
                GitHub
              </a>
            </div>
          </div>
        ))}

        {/* More coming */}
        <div className="text-center py-12">
          <p className="text-zinc-600 text-sm">更多项目正在路上... 🚀</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-950/40 py-10 text-center">
        <p className="text-zinc-500 text-xs">🐱 小小灰 × 墨熵 · 2026</p>
      </footer>
    </div>
  );
}
