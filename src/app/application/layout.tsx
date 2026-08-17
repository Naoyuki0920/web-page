import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Androidアプリ",
  description:
    "石川県野々市市の市営バスの位置がわかる「のっティバスどこ」など、制作したAndroidアプリの紹介ページです。",
  alternates: {
    canonical: "/application",
  },
  openGraph: {
    title: "Androidアプリ | Naoyuki Masuda",
    description:
      "石川県野々市市の市営バスの位置がわかる「のっティバスどこ」など、制作したAndroidアプリの紹介ページです。",
    url: "/application",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
