import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlatNews",
  description:
    "静かで、正直なニュース。広告なし・追跡なし・無限スクロールなしのニュースアプリFlatNewsの紹介ページです。",
  alternates: {
    canonical: "/flatnews",
  },
  openGraph: {
    title: "FlatNews | Naoyuki Masuda",
    description:
      "静かで、正直なニュース。広告なし・追跡なし・無限スクロールなしのニュースアプリFlatNewsの紹介ページです。",
    url: "https://www.naoyuki0920.com/flatnews",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/image/og-flatnews.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
