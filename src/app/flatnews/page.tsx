"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaLink } from "react-icons/fa";
import SectionCard from "../components/section-card";
import MotionWrapper from "../components/motionWrapper";
import FeatureSection from "../components/feature-section";
import Footer from "../components/footer";

const STORE_URL = "https://apps.apple.com/jp/app/id6784650295?ct=web";

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FlatNews｜広告なしニュース",
  operatingSystem: "iOS",
  applicationCategory: "NewsApplication",
  description:
    "静かで、正直なニュース。広告なし・追跡なしのニュースアプリ。並び順はメディア均等で、無限スクロールはありません。",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
    description:
      "基本無料。サブスクリプション「FlatNews+」は月400円・年3,000円。",
  },
  url: "https://apps.apple.com/jp/app/id6784650295",
  author: {
    "@type": "Person",
    name: "Naoyuki Masuda",
  },
};

export default function Page() {
  return (
    <MotionWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <SectionCard>
        <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 5, sm: 8 }}>
          <Stack gap={5} flex="1" minW={0}>
            <Stack direction="row" align="center" gap="20px">
              <Box
                asChild
                boxSize="96px"
                borderRadius="22%"
                borderWidth="1px"
                borderColor="border"
              >
                <NextImage
                  src="/image/flatnews-icon.png"
                  alt="FlatNewsのアプリアイコン"
                  width={256}
                  height={256}
                  priority
                />
              </Box>
              <Stack gap={1}>
                <Heading as="h1" size="2xl">
                  FlatNews
                </Heading>
                <Text>静かで、正直なニュース。</Text>
              </Stack>
            </Stack>
            <Text>
              広告も、追跡も、無限スクロールもないニュースアプリです。読み終わったら、閉じてください。
            </Text>
            <Box>
              <Button asChild size="sm" variant="ghost">
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                  <FaLink />
                  &nbsp;App Storeで見る
                </a>
              </Button>
            </Box>
          </Stack>
          <Box
            asChild
            w="220px"
            h="auto"
            borderRadius="xl"
            alignSelf={{ base: "center", sm: "flex-start" }}
          >
            <NextImage
              src="/image/flatnews-01.png"
              alt="FlatNewsのフィード画面。広告ゼロ、追跡ゼロ"
              width={369}
              height={800}
              priority
            />
          </Box>
        </Flex>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="4つの約束"
          image="/image/flatnews-02.png"
          alt="FlatNewsのメディアバランス帯。どの媒体にも偏らない"
        >
          <Stack gap={2}>
            <Text>
              ・<b>メディアに偏らない。</b>
              並び順はメディア均等で、特定の媒体がフィードを独占しません。
            </Text>
            <Text>
              ・<b>追跡しない。</b>
              あなたが何を読んだかを、私は知りません。
            </Text>
            <Text>
              ・<b>煽らない。</b>
              見出しを盛らず、通知で呼び戻しません。
            </Text>
            <Text>
              ・<b>あなたが選ぶ。</b>
              アルゴリズムのおすすめではなく、あなたが読むものを決めます。
            </Text>
          </Stack>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="終わりのあるニュース"
          image="/image/flatnews-03.png"
          alt="FlatNewsのフィード末尾。今日のニュースはここまで"
        >
          <Text>
            無限スクロールはありません。フィードの末尾には「今日のニュースはここまで」と表示されます。読み終わったら、閉じてください。
          </Text>
          <Text>
            カテゴリは、国内・国際・経済・テクノロジー・科学・スポーツ・エンタメの7つです。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="同じ出来事を、読み比べ"
          image="/image/flatnews-04.png"
          alt="FlatNewsの読み比べ画面。この話題を報じたメディアの一覧"
        >
          <Text>
            同じ話題を報じた各社の記事を、並べて読めます。「◯メディア」の表示は、その出来事をいくつの報道機関が報じているかを示します。報道の広さが、そのニュースの重さです。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="AIの要約について"
          image="/image/flatnews-05.png"
          alt="FlatNewsの記事画面。中立のAI要約と配信元へのリンク"
        >
          <Text>
            各記事に1〜2文の要約が付きます。AIは事実の圧縮だけを行い、評価や誇張を加えません。見出しとリード文に書かれていないことは書きません。
          </Text>
          <Text>
            要約は1記事につき1回だけ生成し、全ユーザーで共有します。あなたの行動に合わせて内容が変わることはありません。全文は、ワンタップで配信元へ。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="アカウントはありません">
          <Text>
            登録は不要です。既読・保存・設定は、あなたの端末の中にだけ保存されます。サーバー側にユーザーテーブルが存在しないので、あなたの行動を集めることが構造的にできません。
          </Text>
          <Text>「信じてください」ではなく、「構造的にできません」。</Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="価格">
          <Text>
            基本機能は無料で使えます。FlatNews+は月400円・年3,000円です。
          </Text>
          <Text>広告はありません。今後も入れません。</Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Text>
            ニュースアプリを閉じたあとの疲労感に、心当たりがあるなら。一度、静かなニュースを試してみてください。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                <FaLink />
                &nbsp;App Storeで見る
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/flatnews/privacy">
                <FaLink />
                &nbsp;プライバシーポリシー
              </NextLink>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/apps">
                <FaLink />
                &nbsp;3つのアプリについて
              </NextLink>
            </Button>
          </Box>
        </Stack>
      </SectionCard>
      <Footer />
    </MotionWrapper>
  );
}
