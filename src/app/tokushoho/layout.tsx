import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "Naoyuki Masuda が提供する iOS アプリ（FlatNews・うちの植物・ひとまず）のアプリ内課金に関する特定商取引法に基づく表記です。",
  alternates: {
    canonical: "/tokushoho",
  },
  openGraph: {
    title: "特定商取引法に基づく表記 | Naoyuki Masuda",
    description:
      "Naoyuki Masuda が提供する iOS アプリのアプリ内課金に関する特定商取引法に基づく表記です。",
    url: "/tokushoho",
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
