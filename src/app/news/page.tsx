"use client";

import Nav from "@/components/Nav";

const updates = [
  {
    date: "2026-06-20",
    title: "个人博客网站上线",
    content: "使用 Next.js 16 + TypeScript + Tailwind CSS 从零搭建个人博客，部署在 Vercel 平台，实现响应式设计。",
  },
  {
    date: "2026-06-17",
    title: "Blender 3D 作品持续更新中",
    content: "已完成5个完整3D作品，涵盖角色建模、场景搭建、动画制作，正在探索个人原创IP设计。",
  },
  {
    date: "2026-06-13",
    title: "配置多模态，灵活调度多种 AI 大模型",
    content: "根据任务需求灵活切换文本、图像、视频等多模态 AI 模型，实现最优性价比与效果平衡。",
  },
  {
    date: "2026-05-30",
    title: "养第三只 OpenClaw — 小小灰上线",
    content: "部署第三只 OpenClaw 智能体「小小灰」，负责 QQ 交互、记忆管理、定时任务、多工具调度，具备完整的长期记忆与主动服务能力。",
  },
  {
    date: "2026-05-14",
    title: "养第二只 OpenClaw，连接 QQ 信息同步",
    content: "部署第二只 OpenClaw 并接入 QQ，实现消息同步、通知推送和定时任务调度。",
  },
  {
    date: "2026-05-09",
    title: "使用 Codex Cloud Code 做作业",
    content: "开始使用 Codex Cloud Code 辅助完成课程作业，体验 AI 驱动的云端编程方式。",
  },
  {
    date: "2026-04-29",
    title: "部署第一只 OpenClaw",
    content: "成功部署了第一只 OpenClaw AI 助手，开启了自己的 AI 智能体之旅。",
  },
];

export default function News() {
  return (
    <div className="min-h-screen t-bg">
      <Nav active="news" />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4 t-text">学习记录</h1>
          <p className="t-text3 text-lg">记录学习过程中的重要节点和进展。</p>
        </section>

        <section className="space-y-4">
          {updates.map((u, i) => (
            <div key={i} className="p-5 rounded-xl t-card">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-md t-accent-bg t-accent text-xs font-medium">{u.date}</span>
                <h3 className="t-text font-medium">{u.title}</h3>
              </div>
              <p className="t-text3 text-sm leading-relaxed">{u.content}</p>
            </div>
          ))}
        </section>

        <section className="text-center py-8">
          <p className="t-text4 text-sm mb-4">更多日常分享在 QQ 空间</p>
          <a
            href="https://user.qzone.qq.com/2097093469/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl t-btn font-medium transition-colors text-sm"
          >
            进入 QQ 空间 →
          </a>
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
