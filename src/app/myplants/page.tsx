"use client";

import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaLink } from "react-icons/fa";
import SectionCard from "../components/section-card";
import MotionWrapper from "../components/motionWrapper";
import Footer from "../components/footer";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4}>
          <Stack direction="row" align="center" gap="20px">
            <Image
              src="/image/myplants-icon.png"
              alt="うちの植物のアプリアイコン"
              boxSize="96px"
              borderRadius="22%"
            />
            <Stack gap={1}>
              <Heading size="2xl">うちの植物</Heading>
              <Text>急かさない観葉植物の育成記録アプリ。</Text>
            </Stack>
          </Stack>
          <Text fontSize="sm" color="gray.500">
            App
            Storeでの公開を準備しています。公開日は、約束できる段階になってから書きます。
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">水やりの日は、決めません。</Heading>
          <Text>
            土が乾く早さは、鉢と置き場所と季節で変わります。カレンダーで決められるものではありません。だからこのアプリは、水やりの予定日を表示しません。
          </Text>
          <Image
            src="/image/myplants-01.png"
            alt="うちの植物のホーム画面。水やりの予定日が表示されていない"
            width="220px"
          />
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">土を見る頃だけ、お知らせ。</Heading>
          <Text>
            急かす通知はありません。通知は朝1回、「そろそろ土を見てみましょう」だけです。
          </Text>
          <Text>
            通知から3タップの観察チェックで、アプリは「水やり」か「もう数日待つ」を提案します。決めるのはあなたです。
          </Text>
          <Image
            src="/image/myplants-02.png"
            alt="うちの植物の観察チェック画面"
            width="220px"
          />
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">見送った日も、記録になる。</Heading>
          <Text>
            「まだ湿っていたので待った」は、水をあげたのと同じくらい大事な一日です。このアプリは「見送った」を、水やりと同じ重さで記録します。
          </Text>
          <Text>
            カレンダーは過去だけです。未来の日付は空白のままにしています。
          </Text>
          <Image
            src="/image/myplants-03.png"
            alt="うちの植物の記録カレンダー画面"
            width="220px"
          />
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">同じ画角で、育ちを残す。</Heading>
          <Text>
            前回の写真を薄く重ねて撮るから、ぶれない。数年分が、静かに積み上がっていきます。
          </Text>
          <Image
            src="/image/myplants-04.png"
            alt="うちの植物の定点撮影画面"
            width="220px"
          />
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">40種を、同じものさしで。</Heading>
          <Text>
            明るさ・水やり・寒さ・大きさ・ペットへの影響。同じ項目で並ぶから、迷わず比べられます。
          </Text>
          <Text>
            図鑑は写真を持たず、文字だけで組みました。全種に「つまずきやすい点」の欄があります。
          </Text>
          <Image
            src="/image/myplants-05.png"
            alt="うちの植物の図鑑画面"
            width="220px"
          />
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">実装しなかったもの</Heading>
          <Stack gap={1}>
            <Text>・バッジ、ストリーク、連続記録</Text>
            <Text>・水やりの予定日</Text>
            <Text>・開発者のサーバー</Text>
          </Stack>
          <Text>
            あなたの記録と写真は、端末とあなたのiCloudにだけ保存されます。
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">価格（予定）</Heading>
          <Text>
            無料で3株まで記録できます。うちの植物+は月200円・年2,000円の予定です。
          </Text>
          <Text fontSize="sm" color="gray.500">
            価格は公開までに変わる可能性があります。
          </Text>
        </Stack>
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
