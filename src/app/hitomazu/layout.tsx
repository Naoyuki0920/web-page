import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ひとまず",
  description:
    "スマホの使いすぎに、ひと呼吸。ブロックしないスクリーンタイム アプリ「ひとまず」の紹介ページです。",
  openGraph: {
    title: "ひとまず | Naoyuki Masuda",
    description:
      "スマホの使いすぎに、ひと呼吸。ブロックしないスクリーンタイム アプリ「ひとまず」の紹介ページです。",
    url: "https://www.naoyuki0920.com/hitomazu",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/image/og-hitomazu.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
