"use client";

import Nav from "@/components/Nav";

export default function About() {
  return (
    <div className="min-h-screen t-bg">
      <Nav active="about" />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 space-y-16">
        {/* 个人简介 */}
        <section>
          <h1 className="text-4xl font-bold mb-4 t-text">关于我</h1>
          <p className="t-text3 leading-relaxed text-lg">
            嗨，我是<strong className="t-text font-bold">墨熵</strong>，2008年生，今年17岁。
            广西南宁人，广西农业职业技术大学计算机网络技术专业大一学生。
          </p>
          <p className="t-text4 leading-relaxed mt-3">
            喜欢3D建模、前端开发、折腾AI工具。座右铭是「好好学习，不要去骚扰别人」。
          </p>
        </section>

        {/* 教育背景 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">教育背景</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="t-text font-medium">广西农业职业技术大学</h3>
                <span className="t-text5 text-xs">2025 - 至今</span>
              </div>
              <p className="t-text3 text-sm">大专 · 计算机网络技术 · 大一</p>
            </div>
            <div className="p-5 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="t-text font-medium">南宁市第一职业技术学校</h3>
                <span className="t-text5 text-xs">2022 - 2025</span>
              </div>
              <p className="t-text3 text-sm">中专 · 计算机应用</p>
            </div>
          </div>
        </section>

        {/* 技能 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">技能</h2>
          <div className="space-y-4">
            {[
              { name: "Blender 3D 建模", level: 18, desc: "角色建模、场景搭建、渲染" },
              { name: "Next.js / React", level: 15, desc: "前端框架、TypeScript" },
              { name: "HTML / CSS / JS", level: 20, desc: "网页基础三件套" },
              { name: "PHP / MySQL", level: 10, desc: "LAMP 架构、数据库基础" },
              { name: "Linux 运维", level: 10, desc: "CentOS、基本命令行" },
              { name: "AI 工具使用", level: 20, desc: "OpenClaw、通义千问、MiMo" },
            ].map((s) => (
              <div key={s.name} className="p-4 rounded-xl t-card">
                <div className="flex items-center justify-between mb-1">
                  <span className="t-text text-sm font-medium">{s.name}</span>
                  <span className="t-accent text-xs font-bold">{s.level}%</span>
                </div>
                <p className="t-text4 text-xs mb-2">{s.desc}</p>
                <div className="w-full h-1.5 rounded-full t-skill-bar">
                  <div className="h-full rounded-full t-skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 项目经历 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">项目经历</h2>
          <div className="space-y-3">
            <div className="p-5 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="t-text font-medium">个人博客网站</h3>
                <span className="t-text5 text-xs">Next.js + Vercel</span>
              </div>
              <p className="t-text3 text-sm leading-relaxed">
                使用 Next.js 16 + TypeScript + Tailwind CSS 搭建，集成 Furry 角色展示、作品集、留言板等功能。
              </p>
            </div>
            <div className="p-5 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="t-text font-medium">OpenClaw 智能体部署</h3>
                <span className="t-text5 text-xs">AI Agent</span>
              </div>
              <p className="t-text3 text-sm leading-relaxed">
                部署了三只 OpenClaw 智能体，实现 QQ 交互、记忆管理、定时任务、多模型调度。
              </p>
            </div>
            <div className="p-5 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="t-text font-medium">Blender 3D 作品集</h3>
                <span className="t-text5 text-xs">5 个完整作品</span>
              </div>
              <p className="t-text3 text-sm leading-relaxed">
                作品风格涵盖写实、卡通、风格化渲染，具备从概念到成品的全流程能力。
              </p>
            </div>
            <div className="p-5 rounded-xl t-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="t-text font-medium">LAMP 架构实训</h3>
                <span className="t-text5 text-xs">课程项目</span>
              </div>
              <p className="t-text3 text-sm leading-relaxed">
                基于 Windows 开发测试 + CentOS 生产上线的分层架构，
                完成动态网站从开发、调试到跨系统部署上线的完整流程。
              </p>
            </div>
          </div>
        </section>

        {/* 座右铭 */}
        <section className="text-center py-8">
          <p className="t-text4 text-sm italic">&ldquo;好好学习，不要去骚扰别人&rdquo;</p>
          <p className="t-text5 text-xs mt-2">—— 墨熵</p>
        </section>

        {/* 社交链接 */}
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
            <a href="https://space.bilibili.com/532703242" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors">
              <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm font-bold t-text3">B</span>
              <div>
                <p className="t-text text-sm">Bilibili</p>
                <p className="t-text4 text-xs">space.bilibili.com/532703242</p>
              </div>
            </a>
            <a href="https://x.com/yangxutao888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors">
              <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm font-bold t-text3">X</span>
              <div>
                <p className="t-text text-sm">X</p>
                <p className="t-text4 text-xs">x.com/yangxutao888</p>
              </div>
            </a>
            <a href="https://github.com/Mosan-258" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl t-link transition-colors">
              <span className="w-10 h-10 rounded-lg t-card2 flex items-center justify-center text-sm font-bold t-text3">G</span>
              <div>
                <p className="t-text text-sm">GitHub</p>
                <p className="t-text4 text-xs">github.com/Mosan-258</p>
              </div>
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
