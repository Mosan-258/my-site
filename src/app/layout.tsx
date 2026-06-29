import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Loading from "@/components/Loading";
import Confetti from "@/components/Confetti";
import BackToTop from "@/components/BackToTop";
import AmbientParticles from "@/components/AmbientParticles";
import VisitorCounter from "@/components/VisitorCounter";

export const metadata: Metadata = {
  title: "墨熵 | 个人主页",
  description: "墨熵的个人主页 - 3D建模、前端开发、技术分享",
  openGraph: {
    title: "墨熵 | 个人主页",
    description: "3D建模、前端开发、AI智能体、Furry创作者",
    url: "https://mosan-258.github.io/my-site",
    siteName: "墨熵的个人主页",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "墨熵 | 个人主页",
    description: "3D建模、前端开发、AI智能体、Furry创作者",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <ThemeProvider>
          <Loading />
          <Confetti />
          <AmbientParticles />
          <BackToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
