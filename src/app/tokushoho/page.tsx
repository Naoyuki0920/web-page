"use client";

import { Heading, Text, Stack, Link } from "@chakra-ui/react";
import SectionCard from "../components/section-card";
import MotionWrapper from "../components/motionWrapper";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4}>
          <Heading as="h1" size="2xl">
            特定商取引法に基づく表記
          </Heading>
          <Text>
            本表記は、当方が提供する iOS
            アプリのアプリ内課金（有料プラン）に適用されます。
          </Text>

          <Heading as="h2" size="lg">販売事業者</Heading>
          <Text>Naoyuki Masuda（個人）</Text>

          <Heading as="h2" size="lg">所在地・電話番号</Heading>
          <Text>
            個人事業者のため省略しています。請求があった場合、遅滞なく開示いたします。開示をご希望の場合は、下記のメールアドレスまでご連絡ください。
          </Text>

          <Heading as="h2" size="lg">連絡先</Heading>
          <Text>
            <Link href="mailto:naoyuki.masuda.dev@gmail.com">
              naoyuki.masuda.dev@gmail.com
            </Link>
          </Text>
          <Text>
            お問い合わせへの回答には数日いただく場合があります。あらかじめご了承ください。
          </Text>

          <Heading as="h2" size="lg">販売価格</Heading>
          <Stack gap={1}>
            <Text>
              ・<b>FlatNews</b>（FlatNews+）：月額400円 ／
              年額3,000円（1週間の無料トライアルあり）
            </Text>
            <Text>
              ・<b>うちの植物</b>（うちの植物+）：月額200円 ／ 年額2,000円
            </Text>
            <Text>
              ・<b>ひとまず</b>（ひとまずPro）：月額300円 ／ 年額1,200円 ／
              買い切り4,800円
            </Text>
          </Stack>
          <Text>
            価格はすべて消費税込みです。最新の価格は、各アプリの App Store
            ページおよび購入画面の表示が優先されます。
          </Text>

          <Heading as="h2" size="lg">販売価格以外にかかる費用</Heading>
          <Text>
            アプリのダウンロードおよび利用に必要な通信費はお客様のご負担となります。
          </Text>

          <Heading as="h2" size="lg">支払方法</Heading>
          <Text>
            Apple の App Store を通じたアプリ内課金です。お支払いは Apple
            アカウントに登録された決済手段で行われます。
          </Text>

          <Heading as="h2" size="lg">支払時期</Heading>
          <Stack gap={2}>
            <Text>
              ・<b>サブスクリプション</b>
              ：購入手続きの完了時に課金されます。期間終了の24時間前までに解約されない限り自動的に更新され、更新分の料金は現在の期間が終了する前の24時間以内に課金されます。
            </Text>
            <Text>
              ・<b>無料トライアル</b>
              ：トライアル期間の終了時に課金されます。期間終了の24時間前までに解約された場合、料金は発生しません。
            </Text>
            <Text>
              ・<b>買い切り</b>：購入手続きの完了時に課金されます。
            </Text>
          </Stack>

          <Heading as="h2" size="lg">サービスの提供時期</Heading>
          <Text>決済手続きの完了後、直ちにご利用いただけます。</Text>

          <Heading as="h2" size="lg">解約について</Heading>
          <Text>
            サブスクリプションの解約は、お使いの iOS 端末の「設定」→
            Apple アカウント →「サブスクリプション」からいつでも行えます。解約後も、現在の課金期間の終了までは有料機能をご利用いただけます。
          </Text>

          <Heading as="h2" size="lg">返品・キャンセルについて</Heading>
          <Text>
            デジタルコンテンツという商品の性質上、購入確定後の返品・キャンセルは原則としてお受けできません。返金をご希望の場合は、Apple
            のポリシーに基づき Apple へ直接ご依頼ください（
            <Link
              href="https://reportaproblem.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              reportaproblem.apple.com
            </Link>
            ）。
          </Text>

          <Heading as="h2" size="lg">動作環境</Heading>
          <Text>
            各アプリの対応 OS・対応端末は、それぞれの App Store
            ページをご確認ください。
          </Text>

          <Text fontSize="sm" color="fg.muted">
            最終更新日：2026年8月18日
          </Text>
        </Stack>
      </SectionCard>
    </MotionWrapper>
  );
}
