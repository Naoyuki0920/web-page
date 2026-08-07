import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "制作したアプリの紹介ページです。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
