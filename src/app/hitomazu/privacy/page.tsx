"use client";

import { Heading, Text, Stack, Link, HStack } from "@chakra-ui/react";
import SectionCard from "../../components/section-card";
import MotionWrapper from "../../components/motionWrapper";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4} id="ja" lang="ja">
          <HStack gap={3} fontSize="sm" color="fg.muted">
            <Text>日本語</Text>
            <Text aria-hidden="true">/</Text>
            <Link href="#en" hrefLang="en">
              English
            </Link>
          </HStack>

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
            本アプリは、選んだアプリや、Safariで開くWebサイトの前にひと呼吸を挟むために、Appleのスクリーンタイム関連機能（Family
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
              ・<b>選んだWebサイトも同じく記号として扱われます。</b>
              Webサイトの見守り（ひとまず Pro）で選んだサイトも「不透明な識別子」としてのみ渡され、本アプリはそのアドレスを文字列として取り出せません。閲覧履歴を読むこともありません。
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
            <Text>・見守る対象として選んだアプリ・Webサイトの識別子</Text>
            <Text>
              ・ひと呼吸のたびの記録（日時、「目的がある」「なんとなく」のどちらを選んだか、開いたか引き返したか）
            </Text>
            <Text>・アプリに付けた呼び名（任意で入力した場合のみ）</Text>
            <Text>・問いかけの数や言葉、外観などのアプリ設定</Text>
            <Text>
              ・日ごとの引き返しの数（ホーム画面のウィジェットに表示するため。端末内で本アプリとウィジェットの間でのみ受け渡します）
            </Text>
            <Text>
              ・ひとまず Pro の購読の有効期限（購読が終わった時に、見守りを最初に登録した1つに戻すため）
            </Text>
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

          <Heading as="h2" size="lg">Apple Intelligence（問いかけの候補）</Heading>
          <Text>
            ひとまず Pro の「問いかけの候補」は、Appleが端末内で動かすモデル（Apple
            Intelligence）を使います。候補を考えるために入力した言葉は<b>端末の外へ送られず、保存もされません</b>。この機能は、Apple
            Intelligenceに対応し、有効にしている端末でのみ表示されます。
          </Text>

          <Heading as="h2" size="lg">ショートカットについて</Heading>
          <Text>
            本アプリは、「今週の引き返し」「今週の立ち止まり」の回数をAppleのショートカットアプリに渡せます。本アプリから自動で送ることはなく、ご自身がショートカットを実行した時にだけ、その数（整数）が渡ります。
          </Text>
          <Text>
            ご自身で作ったショートカットの中で、その数をクラウドのAIモデルや他のアプリ・サービスへ渡すように組んだ場合は、その数がそちらへ送られ、送り先のポリシーに従って扱われます。
          </Text>

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
            Store（StoreKit）を通じて行われます。お支払い情報はAppleが管理し、本アプリは受け取りません。本アプリは購入状態（有効か否か）と購読の有効期限のみを参照します。
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
            最終更新日：2026年9月26日
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4} id="en" lang="en">
          <HStack gap={3} fontSize="sm" color="fg.muted">
            <Link href="#ja" hrefLang="ja">
              日本語
            </Link>
            <Text aria-hidden="true">/</Text>
            <Text>English</Text>
          </HStack>

          <Heading as="h1" size="2xl">
            Hitomazu Privacy Policy
          </Heading>
          <Text>
            Hitomazu (ひとまず, &ldquo;the App&rdquo;) is designed with your
            privacy first. This policy explains what information the App does
            and does not handle.
          </Text>

          <Heading as="h2" size="lg">Our principles</Heading>
          <Stack gap={1}>
            <Text>&bull; The App does not track your behavior.</Text>
            <Text>
              &bull; The App carries no advertising and no third-party tracking
              SDKs.
            </Text>
            <Text>
              &bull; There is no account and no sign-in. The App does not
              collect personal information such as your name or email address.
            </Text>
            <Text>
              &bull; <b>The developer operates no server.</b> There is nowhere
              for the App to send your records.
            </Text>
          </Stack>

          <Heading as="h2" size="lg">Screen Time access</Heading>
          <Text>
            To place a breath before you open an app you have chosen, or a
            website you have chosen in Safari, the App asks for permission to use Apple&rsquo;s Screen Time features
            (Family Controls). This permission is requested only when you go to
            choose the apps you want to watch over.
          </Text>
          <Stack gap={2}>
            <Text>
              &bull; <b>Usage data is not requested.</b> The App does not
              request the App &amp; Website Usage permission, which is what
              would reveal how much you use each app. Neither the developer nor
              the App itself can know your usage time.
            </Text>
            <Text>
              &bull; <b>The apps you choose are handled as symbols.</b> By
              Apple&rsquo;s design, your selection reaches the App only as an
              opaque identifier; the App cannot read out app names or bundle IDs
              as text. Even when a name or icon appears on the breath screen, it
              is the operating system that draws it.
            </Text>
            <Text>
              &bull; <b>The websites you choose are handled as symbols too.</b>{" "}
              Websites you choose to watch (Hitomazu Pro) also reach the App
              only as opaque identifiers; the App cannot read out their
              addresses as text, and it never reads your browsing history.
            </Text>
            <Text>
              &bull; None of this information ever leaves your device.
            </Text>
          </Stack>

          <Heading as="h2" size="lg">Information stored</Heading>
          <Text>
            The following is stored on your device. Deleting the App removes it
            from your device as well.
          </Text>
          <Stack gap={1}>
            <Text>
              &bull; Identifiers for the apps and websites you chose to watch
              over
            </Text>
            <Text>
              &bull; A record of each breath (date and time, which of the two
              answers you chose &mdash; that you had a purpose, or that you
              opened it out of habit &mdash; and whether you went on or turned
              back)
            </Text>
            <Text>
              &bull; A nickname you gave an app (only if you entered one)
            </Text>
            <Text>
              &bull; App settings such as the number and wording of the prompts,
              and appearance
            </Text>
            <Text>
              &bull; The number of times you turned back on each day (to show
              on the Home Screen widget; passed only between the App and its
              widget, on your device)
            </Text>
            <Text>
              &bull; The expiration date of your Hitomazu Pro subscription (so
              that, when a subscription ends, watching can go back to the first
              app you added)
            </Text>
          </Stack>

          <Heading as="h2" size="lg">Syncing with iCloud</Heading>
          <Text>
            You can turn on &ldquo;Sync with iCloud&rdquo; in Settings (
            <b>at no cost</b>). When it is on, the records above are synced
            through Apple&rsquo;s CloudKit
            <b> only to your own iCloud (private database)</b>, so they carry
            over to a new phone or a second device. The developer cannot view
            their contents.
          </Text>
          <Stack gap={1}>
            <Text>
              &bull; Sync is <b>off by default</b>. It runs only if you turn it
              on yourself in Settings.
            </Text>
            <Text>
              &bull; If you do not use sync, your records still remain on your
              device. Records are never lost by turning sync on or off.
            </Text>
            <Text>
              &bull; Anything synced to iCloud can be erased by deleting the
              App&rsquo;s iCloud data from the iOS Settings app.
            </Text>
          </Stack>

          <Heading as="h2" size="lg">
            Apple Intelligence (question ideas)
          </Heading>
          <Text>
            The &ldquo;question ideas&rdquo; feature of Hitomazu Pro uses the
            model Apple runs on your device (Apple Intelligence). What you type
            to get ideas is <b>never sent off your device and never saved</b>.
            The feature appears only on devices that support Apple Intelligence
            and have it turned on.
          </Text>

          <Heading as="h2" size="lg">Shortcuts</Heading>
          <Text>
            The App can hand this week&rsquo;s turn-back and pause counts to
            Apple&rsquo;s Shortcuts app. Nothing is sent automatically; the
            count (a single number) is passed only when you run a shortcut
            yourself.
          </Text>
          <Text>
            If you build a shortcut that passes that number to a cloud AI model
            or another app or service, the number is sent there and handled
            under that destination&rsquo;s policy.
          </Text>

          <Heading as="h2" size="lg">Sending information outside</Heading>
          <Text>
            The App never sends your records or settings to a developer server.
            The developer runs no server, so no such destination exists. No
            external analytics or crash-reporting services are used. The iCloud
            sync described above is completed inside your own account through
            infrastructure Apple provides, and does not pass through the
            developer.
          </Text>

          <Heading as="h2" size="lg">Camera and photos</Heading>
          <Text>
            The App does not use the camera or the photo library.
          </Text>

          <Heading as="h2" size="lg">Notifications</Heading>
          <Text>
            The App shows <b>only one kind of notification: the weekly
            reflection reminder</b> (only if you turn it on in Settings; off by
            default). Its text is assembled on your device as a local
            notification and does not pass through a developer server. The App
            does not set a badge (the red dot on the icon).
          </Text>
          <Text>
            <b>The developer cannot send you push notifications</b>, because
            there is no server to send them from. However, if and only if you
            turn on iCloud sync, Apple&rsquo;s infrastructure uses
            <b> silent notifications that never appear on screen</b> to signal
            that records changed on another device. This is part of the sync
            feature Apple provides; the developer neither decides their contents
            nor sends them.
          </Text>

          <Heading as="h2" size="lg">Purchases (Hitomazu Pro)</Heading>
          <Text>
            Purchases, renewals and cancellations of paid features are handled
            through Apple&rsquo;s App Store (StoreKit). Your payment information
            is managed by Apple and is never received by the App. The App only
            refers to whether a purchase is active and when a subscription
            expires.
          </Text>

          <Heading as="h2" size="lg">Third-party services</Heading>
          <Text>
            The only external services the App uses are the Apple services
            below. Please refer to Apple&rsquo;s own policies for how they
            handle information.
          </Text>
          <Stack gap={1}>
            <Text>&bull; Apple App Store (distribution and payments)</Text>
            <Text>
              &bull; Apple iCloud / CloudKit (syncing records within your own
              account; only if you enable it)
            </Text>
          </Stack>

          <Heading as="h2" size="lg">Children&rsquo;s privacy</Heading>
          <Text>
            The App does not collect personal information from any particular
            age group. Its Screen Time features are designed for you to use on
            your own device, not to manage someone else&rsquo;s.
          </Text>

          <Heading as="h2" size="lg">Changes to this policy</Heading>
          <Text>
            This policy may be revised as needed. Any significant change will be
            announced on this page.
          </Text>

          <Heading as="h2" size="lg">Contact</Heading>
          <Text>
            For questions about this policy or the App, please get in touch at
            the email address below.
          </Text>
          <Text>
            <Link href="mailto:naoyuki.masuda.dev@gmail.com">
              naoyuki.masuda.dev@gmail.com
            </Link>
          </Text>

          <Text fontSize="sm" color="fg.muted">
            Last updated: September 26, 2026
          </Text>
          <Text fontSize="sm" color="fg.muted">
            This English text is a translation provided for convenience. If the
            two versions differ, the Japanese version above prevails.
          </Text>
        </Stack>
      </SectionCard>
    </MotionWrapper>
  );
}
