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

export default function Page() {
  return (
    <MotionWrapper>
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
                  src="/image/hitomazu-icon.png"
                  alt="ひとまずのアプリアイコン"
                  width={256}
                  height={256}
                  priority
                />
              </Box>
              <Stack gap={1}>
                <Heading as="h1" size="2xl">
                  ひとまず
                </Heading>
                <Text>スマホの使いすぎに、ひと呼吸。</Text>
              </Stack>
            </Stack>
            <Text>ブロックしません。開く前に、ひと呼吸だけ。</Text>
            <Text fontSize="sm" color="fg.muted">
              App
              Storeでの公開を準備しています。公開日は、約束できる段階になってから書きます。
            </Text>
          </Stack>
          <Box
            asChild
            w="220px"
            h="auto"
            borderRadius="xl"
            alignSelf={{ base: "center", sm: "flex-start" }}
          >
            <NextImage
              src="/image/hitomazu-01.png"
              alt="ひとまずのシールド画面。いま、何をしに?"
              width={369}
              height={800}
              priority
            />
          </Box>
        </Flex>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="開く前に、ひと呼吸"
          image="/image/hitomazu-02.png"
          alt="ひとまずの確認画面。それでも、開きますか?"
        >
          <Text>
            見守るアプリを開こうとすると、シールドが「いま、何をしに?」と聞きます。答えは1タップ、「目的がある」か「なんとなく」。
          </Text>
          <Text>
            「なんとなく」と正直に選んでも、責めません。答えたら、そのまま開いてもいいし、引き返してもいい。決めるのはあなたです。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="引き返した回数を、数えます"
          image="/image/hitomazu-03.png"
          alt="ひとまずのホーム画面。今週の立ち止まりと引き返しの回数"
        >
          <Text>
            週の振り返りは、肯定の数字から始まります。「今週、あなたは 34回
            立ち止まり、19回 引き返しました。」
          </Text>
          <Text>
            前週比も、パーセントも、赤い数字も出しません。ストリークもバッジもありません。増えた週があっても、責められることはありません。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="傾向は、答え合わせに"
          image="/image/hitomazu-04.png"
          alt="ひとまずの答え合わせ画面。これまでの記録と傾向"
        >
          <Text>
            時間帯や曜日の傾向を、事実として返します。「だからやめましょう」とは言いません。結論を出すのは、あなたです。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="ブロックしない、と決めています">
          <Text>
            ハードブロックや強制ロックは、今後も実装しません。これは未実装の機能ではなく、変えない制約として文書に残してあります。禁止は反発を生み、罰は自己嫌悪を生むからです。
          </Text>
          <Text>ひと呼吸の強さは、問いかけの数で変えられます。</Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="サーバーがありません"
          image="/image/hitomazu-05.png"
          alt="ひとまずの設定画面。このアプリに無いものの一覧"
        >
          <Text>
            あなたの記録は、端末とあなたのiCloudにだけ保存されます。開発者のサーバーは、そもそも存在しません。
          </Text>
          <Text>
            Screen
            TimeのデータはAppleの設計上、端末の外に出せません。これは宣伝文句ではなく、検証できる構造です。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="価格">
          <Text>
            月300円・年1,200円・買い切り4,800円。無料のままでも完結して使えます。ひと呼吸と記録、履歴の振り返り、iCloud同期は無料です。
          </Text>
          <Text>
            ひとまず
            Proでできることは3つだけです。見守るアプリを無制限に選べる。問いかけの言葉を自分の言葉にできる。時間帯ごとにひと呼吸の強さを変えられる。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Text>
            スマホを開いた理由を、覚えていますか。それを責めずに数えるアプリを、いま公開に向けて仕上げています。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/hitomazu/privacy">
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
