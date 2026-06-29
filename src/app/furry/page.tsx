"use client";

import Nav from "@/components/Nav";
import Image from "next/image";
import { useState, useEffect } from "react";

const furryImages = [
  { src: "/my-site/furry/avatar.jpg", alt: "墨熵设定图", caption: "墨熵 · 官方设定" },
  { src: "/my-site/furry/head-wolf.jpg", alt: "墨熵头像狼小徐赠", caption: "头像 · 狼小徐赠" },
  { src: "/my-site/furry/head-4eyes.png", alt: "面瘫四眼小墨熵", caption: "面瘫四眼小墨熵 · 商绘" },
  { src: "/my-site/furry/head-qq.png", alt: "QQ小鼻噶墨熵", caption: "QQ小鼻噶 · 板栗飞鼠粥赠" },
];

export default function Furry() {
  const [current, setCurrent] = useState(0);
  const [catPos, setCatPos] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCatPos((prev) => {
        const next = prev + (Math.random() > 0.5 ? 4 : -4);
        return Math.max(15, Math.min(85, next));
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen t-bg">
      <Nav active="furry" />

      {/* 未完成遮罩 */}
      <div className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none" style={{ background: "var(--bg)", opacity: 0.99 }}>
        <div className="text-center space-y-6">
          <p className="text-5xl">🚧</p>
          <h2 className="text-2xl font-bold t-text">页面搭建中</h2>
          <p className="t-text3 text-sm">敬请期待</p>
          <div className="relative h-16 w-48 mx-auto rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <div
              className="absolute bottom-1 text-2xl"
              style={{ left: `${catPos}%`, transform: "translateX(-50%)" }}
            >
              🐱
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4 t-text">墨熵 · Furry</h1>
          <p className="t-text3 text-lg">角色设定与插画展示。</p>
        </section>

        {/* 版权声明 */}
        <section className="p-4 rounded-xl t-card text-center">
          <p className="t-text4 text-xs leading-relaxed">
            © 2026 墨熵 · 所有角色设定及插画均已获画师授权，请勿盗用、转载或用于商业用途
          </p>
        </section>

        {/* 轮播 */}
        <section>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden t-card">
            <Image
              src={furryImages[current].src}
              alt={furryImages[current].alt}
              fill
              className="object-contain"
            />
            {/* 左右按钮 */}
            <button
              onClick={() => setCurrent((current - 1 + furryImages.length) % furryImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full t-btn flex items-center justify-center text-lg transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((current + 1) % furryImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full t-btn flex items-center justify-center text-lg transition-colors"
            >
              ›
            </button>
          </div>
          {/* 底部指示器 */}
          <p className="text-center t-text3 text-sm mt-3">{furryImages[current].caption}</p>
          <div className="flex justify-center gap-2 mt-2">
            {furryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "t-accent" : "t-card2"}`}
                style={i === current ? { background: "var(--accent)" } : { background: "var(--bg-card2)" }}
              />
            ))}
          </div>
        </section>

        {/* 缩略图 */}
        <section>
          <div className="grid grid-cols-4 gap-3">
            {furryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                  i === current ? "border-[var(--accent)]" : "border-[var(--border)]"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </section>

        {/* 角色信息 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 t-text">角色设定</h2>
          <div className="p-6 rounded-xl t-card space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[["名字", "墨熵"], ["种族", "胡郊灰"], ["性别", "男"], ["年龄", "17岁"], ["生日", "2008.07.07"]].map(([k, v]) => (
                <div key={k}>
                  <p className="t-text4 text-xs mb-1">{k}</p>
                  <p className="t-text2 text-sm font-medium">{v}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-[var(--border)]">
              <p className="t-text4 text-xs mb-2">简介</p>
              <p className="t-text3 text-sm leading-relaxed">
                一只忧郁冷萌的胡郊灰，外热内冷型。平时话不多，熟了之后会比较放得开。
                喜欢干饭、建模、折腾技术。害怕虫子，讨厌苦瓜和鱼。
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border)]">
              <p className="t-text4 text-xs mb-2">设定画师</p>
              <div className="flex flex-wrap gap-2">
                {["板栗飞鼠粥", "狼小徐", "商"].map((a) => (
                  <span key={a} className="px-3 py-1 text-xs rounded-full t-tag">{a}</span>
                ))}
              </div>
            </div>
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
