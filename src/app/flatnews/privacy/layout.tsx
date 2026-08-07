import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlatNews プライバシーポリシー",
  description:
    "iOSアプリ FlatNews のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
