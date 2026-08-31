import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ひとまず プライバシーポリシー / Privacy Policy",
  description:
    "iOSアプリ「ひとまず」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。Privacy policy for the iOS app Hitomazu, in Japanese and English.",
  alternates: {
    canonical: "/hitomazu/privacy",
  },
  openGraph: {
    title: "ひとまず プライバシーポリシー | Naoyuki Masuda",
    description:
      "iOSアプリ「ひとまず」のプライバシーポリシー。取得する情報・取得しない情報について説明しています。日本語と英語を併記しています。",
    url: "/hitomazu/privacy",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
