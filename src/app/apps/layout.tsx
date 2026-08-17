import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "広告のないiOSアプリを3つ作っています。FlatNews・うちの植物・ひとまずの紹介ページです。",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Apps | Naoyuki Masuda",
    description:
      "広告のないiOSアプリを3つ作っています。FlatNews・うちの植物・ひとまずの紹介ページです。",
    url: "https://www.naoyuki0920.com/apps",
    siteName: "Naoyuki Masuda",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/image/og-apps.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "広告のないニュースアプリはありますか。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FlatNewsは、広告のないニュースアプリです。26媒体・約2,400記事/日を、特定の媒体に偏らない並びで表示します。行動追跡もおすすめもなく、収益はFlatNews+（月400円・年3,000円）だけです。広告は今後も入れません。",
      },
    },
    {
      "@type": "Question",
      name: "水やりを催促しない観葉植物アプリはありますか。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "うちの植物は、水やりの予定日を表示しない育成記録アプリです。通知は朝1回、「そろそろ土を見てみましょう」だけで、水をあげるかどうかはあなたが決めます。現在、App Storeでの公開を準備しています。",
      },
    },
    {
      "@type": "Question",
      name: "スマホをブロックしないスクリーンタイム アプリはありますか。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ひとまずは、アプリをブロックしません。開く前にシールドが「いま、何をしに?」と聞くだけです。引き返した回数を数え、前週比や罰、ストリークはありません。現在、App Storeでの公開を準備しています。",
      },
    },
    {
      "@type": "Question",
      name: "なぜ広告を入れないのですか。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "広告で収益を得ると、あなたの滞在時間が私の収入になります。その構造のままでは、静かなアプリは作れません。だから3つとも、収益は少額の課金だけにしています。",
      },
    },
    {
      "@type": "Question",
      name: "利用データはどこに保存されますか。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3つとも、あなたの記録は端末とあなたのiCloudにだけ保存されます。開発者のサーバーにユーザーのデータを置きません。「信じてください」ではなく、構造的に集められない設計です。",
      },
    },
    {
      "@type": "Question",
      name: "誰が作っていますか。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Naoyuki Masudaが、個人で開発しています。",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
