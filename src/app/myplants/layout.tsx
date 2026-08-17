import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "うちの植物",
  description:
    "急かさない観葉植物の育成記録アプリ「うちの植物」の紹介ページです。水やりの予定日を表示しません。",
  alternates: {
    canonical: "/myplants",
  },
  openGraph: {
    title: "うちの植物 | Naoyuki Masuda",
    description:
      "急かさない観葉植物の育成記録アプリ「うちの植物」の紹介ページです。水やりの予定日を表示しません。",
    url: "https://www.naoyuki0920.com/myplants",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/image/og-myplants.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
