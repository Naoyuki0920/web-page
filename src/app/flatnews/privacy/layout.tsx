import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlatNews プライバシーポリシー",
  description:
    "iOSアプリ FlatNews のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
  alternates: {
    canonical: "/flatnews/privacy",
  },
  openGraph: {
    title: "FlatNews プライバシーポリシー | Naoyuki Masuda",
    description:
      "iOSアプリ FlatNews のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
    url: "/flatnews/privacy",
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
