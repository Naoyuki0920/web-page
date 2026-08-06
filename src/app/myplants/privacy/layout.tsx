import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "うちの植物 プライバシーポリシー",
  description:
    "iOSアプリ「うちの植物」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
