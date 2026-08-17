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
            ひとまず プライバシーポリシー
          </Heading>
          <Text>
            ひとまず（以下「本アプリ」）は、ユーザーのプライバシーを最優先に設計されています。本ポリシーは、本アプリが扱う情報・扱わない情報について説明します。
          </Text>

          <Heading as="h2" size="lg">基本方針</Heading>
          <Stack gap={1}>
            <Text>・本アプリは、ユーザーの行動を追跡しません。</Text>
            <Text>・広告および第三者のトラッキングSDKを一切使用しません。</Text>
            <Text>
              ・アカウント登録やログインはなく、氏名・メールアドレス等の個人情報を収集しません。
            </Text>
            <Text>
              ・<b>開発者はサーバーを持ちません。</b>
              本アプリには記録の送信先が存在しません。
            </Text>
          </Stack>

          <Heading as="h2" size="lg">スクリーンタイムへのアクセスについて</Heading>
          <Text>
            本アプリは、選んだアプリを開く前にひと呼吸を挟むために、Appleのスクリーンタイム関連機能（Family
            Controls）へのアクセス許可をお願いします。この許可は、見守るアプリを選ぶ操作をした時にのみ求めます。
          </Text>
          <Stack gap={2}>
            <Text>
              ・<b>利用状況データは要求しません。</b>
              本アプリは、どのアプリをどれだけ使ったかという利用統計を取得する権限（App
              &amp; Website
              Usage）を要求しません。したがって、開発者はもちろん本アプリ自身も、あなたの利用時間を知ることはありません。
            </Text>
            <Text>
              ・<b>選んだアプリは記号として扱われます。</b>
              Appleの仕組み上、アプリの選択結果は本体アプリには「不透明な識別子」としてのみ渡され、アプリ名やBundle
              IDを文字列として取り出すことはできません。ひと呼吸の画面にアプリ名やアイコンを表示する場合も、描画はOSが行います。
            </Text>
            <Text>
              ・これらの情報は、いずれも端末の外に出ることはありません。
            </Text>
          </Stack>

          <Heading as="h2" size="lg">保存される情報</Heading>
          <Text>
            以下はお使いの端末内に保存されます。本アプリを削除すると、これらの情報も端末から削除されます。
          </Text>
          <Stack gap={1}>
            <Text>・見守る対象として選んだアプリの識別子</Text>
            <Text>
              ・ひと呼吸のたびの記録（日時、「目的がある」「なんとなく」のどちらを選んだか、開いたか引き返したか）
            </Text>
            <Text>・アプリに付けた呼び名（任意で入力した場合のみ）</Text>
            <Text>・問いかけの数や言葉、外観などのアプリ設定</Text>
          </Stack>

          <Heading as="h2" size="lg">iCloudでの同期について</Heading>
          <Text>
            設定画面から「iCloudで同期」を有効にできます（
            <b>無料でご利用いただけます</b>
            ）。有効にすると、上記の記録がAppleの提供するCloudKitを通じて
            <b>ユーザーご本人のiCloud（プライベートデータベース）</b>
            にのみ同期され、機種変更や2台目の端末で引き継げるようになります。開発者がこの内容を閲覧することはできません。
          </Text>
          <Stack gap={1}>
            <Text>
              ・同期は<b>既定では無効</b>
              です。ご自身で設定画面から有効にした場合にのみ動作します。
            </Text>
            <Text>
              ・同期を使わない場合も、記録は端末内に残り続けます。同期の有無で記録が失われることはありません。
            </Text>
            <Text>
              ・iCloudに同期された内容は、iOSの「設定」からiCloud上のデータを削除することで消去できます。
            </Text>
          </Stack>

          <Heading as="h2" size="lg">外部への送信</Heading>
          <Text>
            本アプリは、記録や設定を開発者のサーバーへ送信することはありません。開発者はサーバーを運用しておらず、送信先そのものが存在しません。分析ツールやクラッシュレポートの外部サービスも使用していません。前項のiCloud同期は、Appleが提供する仕組みを通じてご本人のアカウント内で完結するもので、開発者を経由しません。
          </Text>

          <Heading as="h2" size="lg">カメラ・写真</Heading>
          <Text>本アプリは、カメラおよび写真ライブラリを使用しません。</Text>

          <Heading as="h2" size="lg">通知について</Heading>
          <Text>
            本アプリが表示する通知は、<b>週の振り返りのおしらせ1種類だけ</b>
            です（設定画面から有効にした場合のみ。既定ではオフ）。文面は端末内で組み立てられるローカル通知で、開発者のサーバーを経由しません。バッジ（アイコンの赤い丸）は付けません。
          </Text>
          <Text>
            <b>開発者からプッシュ通知を送ることはできません。</b>
            送信元となるサーバーを持っていないためです。ただし、iCloud同期を有効にした場合に限り、他の端末で記録が変わったことを知らせるためにAppleの仕組みが
            <b>画面に表示されないサイレント通知</b>
            を使います。これはApple提供の同期機能の一部で、開発者が内容を決めることも、送信することもできません。
          </Text>

          <Heading as="h2" size="lg">購入について（ひとまず Pro）</Heading>
          <Text>
            有料機能の購入・更新・解約は、AppleのApp
            Store（StoreKit）を通じて行われます。お支払い情報はAppleが管理し、本アプリは受け取りません。本アプリは購入状態（有効か否か）のみを参照します。
          </Text>

          <Heading as="h2" size="lg">第三者サービス</Heading>
          <Text>
            本アプリが利用する外部サービスは、以下のAppleのサービスのみです。取り扱いについては同社のポリシーをご確認ください。
          </Text>
          <Stack gap={1}>
            <Text>・Apple App Store（配信・課金）</Text>
            <Text>
              ・Apple iCloud /
              CloudKit（記録のご本人アカウント内での同期。有効にした場合のみ）
            </Text>
          </Stack>

          <Heading as="h2" size="lg">子どものプライバシー</Heading>
          <Text>
            本アプリは、特定の年齢層を対象に個人情報を収集することはありません。本アプリのスクリーンタイム機能は、ご本人がご自身の端末に対して使うためのもので、他者の端末を管理する用途では設計されていません。
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
            最終更新日：2026年8月12日
          </Text>
        </Stack>
      </SectionCard>
    </MotionWrapper>
  );
}
