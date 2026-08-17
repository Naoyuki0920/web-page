import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "うちの植物 プライバシーポリシー",
  description:
    "iOSアプリ「うちの植物」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
  alternates: {
    canonical: "/myplants/privacy",
  },
  openGraph: {
    title: "うちの植物 プライバシーポリシー | Naoyuki Masuda",
    description:
      "iOSアプリ「うちの植物」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
    url: "/myplants/privacy",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
