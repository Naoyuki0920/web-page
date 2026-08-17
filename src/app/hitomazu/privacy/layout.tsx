import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ひとまず プライバシーポリシー",
  description:
    "iOSアプリ「ひとまず」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
  alternates: {
    canonical: "/hitomazu/privacy",
  },
  openGraph: {
    title: "ひとまず プライバシーポリシー | Naoyuki Masuda",
    description:
      "iOSアプリ「ひとまず」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。",
    url: "/hitomazu/privacy",
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
