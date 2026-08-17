"use client";

import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
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
        <Stack gap={5}>
          <Stack direction="row" align="center" gap="20px">
            <Box
              asChild
              boxSize="96px"
              borderRadius="22%"
              borderWidth="1px"
              borderColor="border"
            >
              <NextImage
                src="/image/myplants-icon.png"
                alt="うちの植物のアプリアイコン"
                width={256}
                height={256}
                priority
              />
            </Box>
            <Stack gap={1}>
              <Heading as="h1" size="2xl">
                うちの植物
              </Heading>
              <Text>急かさない観葉植物の育成記録アプリ。</Text>
            </Stack>
          </Stack>
          <Text fontSize="sm" color="fg.muted">
            App
            Storeでの公開を準備しています。公開日は、約束できる段階になってから書きます。
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="水やりの日は、決めません。"
          image="/image/myplants-01.png"
          alt="うちの植物のホーム画面。水やりの予定日が表示されていない"
        >
          <Text>
            土が乾く早さは、鉢と置き場所と季節で変わります。カレンダーで決められるものではありません。だからこのアプリは、水やりの予定日を表示しません。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="土を見る頃だけ、お知らせ。"
          image="/image/myplants-02.png"
          alt="うちの植物の観察チェック画面"
        >
          <Text>
            急かす通知はありません。通知は朝1回、「そろそろ土を見てみましょう」だけです。
          </Text>
          <Text>
            通知から3タップの観察チェックで、アプリは「水やり」か「もう数日待つ」を提案します。決めるのはあなたです。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="見送った日も、記録になる。"
          image="/image/myplants-03.png"
          alt="うちの植物の記録カレンダー画面"
        >
          <Text>
            「まだ湿っていたので待った」は、水をあげたのと同じくらい大事な一日です。このアプリは「見送った」を、水やりと同じ重さで記録します。
          </Text>
          <Text>
            カレンダーは過去だけです。未来の日付は空白のままにしています。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="同じ画角で、育ちを残す。"
          image="/image/myplants-04.png"
          alt="うちの植物の定点撮影画面"
        >
          <Text>
            前回の写真を薄く重ねて撮るから、ぶれない。数年分が、静かに積み上がっていきます。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection
          title="40種を、同じものさしで。"
          image="/image/myplants-05.png"
          alt="うちの植物の図鑑画面"
        >
          <Text>
            明るさ・水やり・寒さ・大きさ・ペットへの影響。同じ項目で並ぶから、迷わず比べられます。
          </Text>
          <Text>
            図鑑は写真を持たず、文字だけで組みました。全種に「つまずきやすい点」の欄があります。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="実装しなかったもの">
          <Stack gap={1}>
            <Text>・バッジ、ストリーク、連続記録</Text>
            <Text>・水やりの予定日</Text>
            <Text>・開発者のサーバー</Text>
          </Stack>
          <Text>
            あなたの記録と写真は、端末とあなたのiCloudにだけ保存されます。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="価格（予定）">
          <Text>
            無料で3株まで記録できます。うちの植物+は月200円・年2,000円の予定です。
          </Text>
          <Text fontSize="sm" color="fg.muted">
            価格は公開までに変わる可能性があります。
          </Text>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Text>
            植物は、カレンダーどおりには乾きません。それを前提にしたアプリを、いま公開に向けて仕上げています。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/myplants/privacy">
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
