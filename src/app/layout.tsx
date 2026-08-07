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
  title: {
    default: "Naoyuki Masuda - Homepage",
    template: "%s | Naoyuki Masuda",
  },
  description:
    "増田尚幸のポートフォリオサイト。制作したアプリや経歴を掲載しています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={ibmPlexSansJP.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
