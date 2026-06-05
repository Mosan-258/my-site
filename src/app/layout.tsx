import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "墨熵 | 3D Artist & Developer",
  description: "墨熵的个人作品集网站 - Blender建模、3D创作、技术分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
