"use client";

import { Heading, Text, Stack, Link } from "@chakra-ui/react";
import SectionCard from "../../components/section-card";
import MotionWrapper from "../../components/motionWrapper";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4}>
          <Heading as="h1" size="2xl">
            うちの植物 プライバシーポリシー
          </Heading>
          <Text>
            うちの植物（以下「本アプリ」）は、ユーザーのプライバシーを最優先に設計されています。本ポリシーは、本アプリが扱う情報・扱わない情報について説明します。
          </Text>

          <Heading as="h2" size="lg">基本方針</Heading>
          <Stack gap={1}>
            <Text>・本アプリは、ユーザーの行動を追跡しません。</Text>
            <Text>・広告および第三者のトラッキングSDKを一切使用しません。</Text>
            <Text>
              ・アカウント登録やログインはなく、氏名・メールアドレス等の個人情報を収集しません。
            </Text>
            <Text>
              ・開発者はサーバーを持たず、ユーザーの記録を受け取りません。
            </Text>
          </Stack>

          <Heading as="h2" size="lg">記録の保存先</Heading>
          <Text>
            本アプリで記録した内容は、お使いの端末内に保存されます。iCloudにサインインしている場合は、Appleが提供するCloudKitを通じて、
            <b>ユーザーご本人のiCloud（プライベートデータベース）</b>
            にのみ同期されます。開発者がこの内容を閲覧することはできません。
          </Text>
          <Stack gap={1}>
            <Text>・登録した植物の情報（種類・呼び名・鉢・置き場所など）</Text>
            <Text>
              ・水やり、見送り、肥料などの記録と、観察時に選んだ土や葉の状態
            </Text>
            <Text>・カメラで撮影した植物の写真</Text>
            <Text>・通知時刻、外観、文字サイズなどのアプリ設定</Text>
          </Stack>
          <Text>
            本アプリを削除すると、端末内のこれらの情報は削除されます。iCloudに同期された内容は、iOSの「設定」からiCloud上のデータを削除することで消去できます。
          </Text>

          <Heading as="h2" size="lg">外部への送信</Heading>
          <Text>
            本アプリは、記録や写真を開発者のサーバーへ送信することはありません。植物の図鑑データはアプリ内に同梱されており、閲覧や検索のための通信も行いません。
          </Text>

          <Heading as="h2" size="lg">カメラの利用</Heading>
          <Text>
            植物の写真を撮影するためにカメラを使用します。撮影した写真は端末内、およびご本人のiCloudにのみ保存されます。撮影のために許可を求める以外の目的でカメラを使用することはありません。写真ライブラリへの保存は行いません。
          </Text>

          <Heading as="h2" size="lg">通知</Heading>
          <Text>
            おしらせはすべて端末内で組み立てられるローカル通知です。リモートプッシュ通知は使用しておらず、通知のために端末を識別する情報を外部へ送信することはありません。
          </Text>

          <Heading as="h2" size="lg">サブスクリプション（うちの植物+）</Heading>
          <Text>
            有料機能の購入・更新・解約は、AppleのApp
            Store（StoreKit）を通じて行われます。お支払い情報はAppleが管理し、本アプリは受け取りません。本アプリは購入状態（有効か否か）のみを参照します。
          </Text>

          <Heading as="h2" size="lg">植物の追加依頼</Heading>
          <Text>
            図鑑に載っていない植物をお知らせいただく窓口として、Googleフォームを利用しています。本アプリはフォームを開くだけで、入力内容を受け取ることも保存することもありません。送信された内容はGoogle上に保存され、図鑑を追加する目的にのみ使用します。
          </Text>
          <Text>
            氏名の入力は求めません。メールアドレスの欄は、追加された際の連絡をご希望の場合にのみお使いください。空欄のまま匿名で送信できます。
          </Text>

          <Heading as="h2" size="lg">第三者サービス</Heading>
          <Text>
            本アプリが利用する外部サービスは以下のとおりです。取り扱いについては各社のポリシーをご確認ください。
          </Text>
          <Stack gap={1}>
            <Text>
              ・Apple iCloud / CloudKit（記録のご本人アカウント内での同期）
            </Text>
            <Text>・Apple App Store（配信・課金）</Text>
            <Text>
              ・Google フォーム（植物の追加依頼。任意でご利用いただくもの）
            </Text>
          </Stack>

          <Heading as="h2" size="lg">図鑑の情報について</Heading>
          <Text>
            本アプリに収録している植物の情報は、一般に知られている育て方をまとめたものであり、専門書や研究からの引用ではありません。ペットへの毒性に関する項目は
            ASPCA（米国動物虐待防止協会）の公開一覧に基づいていますが、いずれも目安です。植物やペットの健康に関わる判断は、専門家にご相談ください。
          </Text>

          <Heading as="h2" size="lg">子どものプライバシー</Heading>
          <Text>
            本アプリは、特定の年齢層を対象に個人情報を収集することはありません。
          </Text>

          <Heading as="h2" size="lg">ポリシーの変更</Heading>
          <Text>
            本ポリシーは必要に応じて改定されることがあります。重要な変更がある場合は本ページで告知します。
          </Text>

          <Heading as="h2" size="lg">お問い合わせ</Heading>
          <Text>
            本ポリシーや本アプリに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
          </Text>
          <Text>
            <Link href="mailto:naoyuki.masuda.dev@gmail.com">
              naoyuki.masuda.dev@gmail.com
            </Link>
          </Text>

          <Text fontSize="sm" color="fg.muted">
            最終更新日：2026年8月1日
          </Text>
        </Stack>
      </SectionCard>
    </MotionWrapper>
  );
}
