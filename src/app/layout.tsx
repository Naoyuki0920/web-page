import type { Metadata } from "next";
import { IBM_Plex_Sans_JP } from "next/font/google";
import { Providers } from "./providers";
import Header from "./header";
import Main from "./main";

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naoyuki0920.com"),
  title: {
    default: "Naoyuki Masuda - Homepage",
    template: "%s | Naoyuki Masuda",
  },
  description:
    "Naoyuki Masudaのポートフォリオサイト。制作したアプリや経歴を掲載しています。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naoyuki Masuda - Homepage",
    description:
      "Naoyuki Masudaのポートフォリオサイト。制作したアプリや経歴を掲載しています。",
    url: "/",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.naoyuki0920.com/#person",
      name: "Naoyuki Masuda",
      url: "https://www.naoyuki0920.com",
      jobTitle: "iOS App Creator & Security Engineer",
      sameAs: [
        "https://github.com/Naoyuki0920",
        "https://x.com/naoyuki_dev",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.naoyuki0920.com/#website",
      name: "Naoyuki Masuda",
      url: "https://www.naoyuki0920.com",
      inLanguage: "ja",
      publisher: { "@id": "https://www.naoyuki0920.com/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={ibmPlexSansJP.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Providers>
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
