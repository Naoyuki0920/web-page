"use client";

import { Heading, Text, Stack, Link } from "@chakra-ui/react";
import SectionCard from "../../components/section-card";
import MotionWrapper from "../../components/motionWrapper";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4}>
          <Heading size="2xl">FlatNews プライバシーポリシー</Heading>
          <Text>
            FlatNews（以下「本アプリ」）は、ユーザーのプライバシーを最優先に設計されています。本ポリシーは、本アプリが扱う情報・扱わない情報について説明します。
          </Text>

          <Heading size="lg">基本方針</Heading>
          <Stack gap={1}>
            <Text>・本アプリは、ユーザーの行動を追跡しません。</Text>
            <Text>・広告および第三者のトラッキングSDKを一切使用しません。</Text>
            <Text>
              ・アカウント登録やログインはなく、氏名・メールアドレス等の個人情報を収集しません。
            </Text>
          </Stack>

          <Heading size="lg">端末内にのみ保存される情報</Heading>
          <Text>
            以下はすべてお使いの端末内にのみ保存され、サーバーには送信されません。本アプリを削除すると、これらの情報も端末から削除されます。
          </Text>
          <Stack gap={1}>
            <Text>・既読・保存した記事</Text>
            <Text>・登録したトピック（キーワード）</Text>
            <Text>・通知時刻などのアプリ設定</Text>
          </Stack>

          <Heading size="lg">サーバーに送信される情報</Heading>
          <Text>
            本アプリはニュースを表示するため、必要最小限の通信を行います。いずれもユーザー個人を識別する情報は含みません。
          </Text>
          <Stack gap={2}>
            <Text>
              ・<b>ニュースの取得</b>
              ：本アプリのバックエンドから、匿名の読み取り専用キーで記事を取得します。ユーザーを識別する情報は送信しません。
            </Text>
            <Text>
              ・<b>トピック検索・横断ブリーフィング</b>
              ：入力したキーワードを、検索結果の取得および概況の生成のためにのみ送信します。キーワードをユーザーの行動履歴として保存・ログ化することはありません。
            </Text>
            <Text>
              ・<b>AIによる要約・概況</b>
              ：記事の見出し等を要約サービス（Anthropic Claude）に送信し、要約・概況を生成します。生成結果は全ユーザーで共有・キャッシュされ、特定の個人には紐づきません。
            </Text>
            <Text>
              ・<b>Web検索</b>
              ：トピックの母数を広げるため、Googleニュース検索を利用します。キーワードは取得のためだけに使用します。
            </Text>
          </Stack>

          <Heading size="lg">サブスクリプション（FlatNews+）</Heading>
          <Text>
            有料機能の購入・更新・解約は、AppleのApp Store（StoreKit）を通じて行われます。お支払い情報はAppleが管理し、本アプリは受け取りません。本アプリは購入状態（有効か否か）のみを参照します。
          </Text>

          <Heading size="lg">第三者サービス</Heading>
          <Text>
            本アプリは以下の外部サービスを利用します。各サービスでの取り扱いについては各社のポリシーをご確認ください。
          </Text>
          <Stack gap={1}>
            <Text>・Supabase（バックエンド・ホスティング）</Text>
            <Text>・Anthropic（AIによる要約・概況）</Text>
            <Text>・Google ニュース（検索）</Text>
            <Text>・Apple（App Store・課金）</Text>
          </Stack>

          <Heading size="lg">子どものプライバシー</Heading>
          <Text>
            本アプリは、特定の年齢層を対象に個人情報を収集することはありません。
          </Text>

          <Heading size="lg">ポリシーの変更</Heading>
          <Text>
            本ポリシーは必要に応じて改定されることがあります。重要な変更がある場合は本ページで告知します。
          </Text>

          <Heading size="lg">お問い合わせ</Heading>
          <Text>
            本ポリシーや本アプリに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
          </Text>
          <Text>
            <Link href="mailto:flat.news.support@gmail.com">
              flat.news.support@gmail.com
            </Link>
          </Text>

          <Text fontSize="sm" color="gray.500">
            最終更新日：2026年6月20日
          </Text>
        </Stack>
      </SectionCard>
    </MotionWrapper>
  );
}
