# web-page

増田尚幸のポートフォリオサイトです。プロフィール、経歴、制作したアプリの紹介と、各アプリのプライバシーポリシーを掲載しています。

## 技術スタック

- [Next.js](https://nextjs.org/) 16 (App Router / Turbopack)
- React 19
- [Chakra UI](https://chakra-ui.com/) v3
- [Framer Motion](https://motion.dev/) (ページ遷移アニメーション)
- [next-themes](https://github.com/pacocoursey/next-themes) (ダークモード)
- TypeScript

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開きます。

## その他のコマンド

```bash
npm run build   # 本番ビルド
npm run start   # ビルド結果の起動
npm run lint    # ESLint
npm run format  # Prettier
```

## ページ構成

| パス                | 内容                            |
| ------------------- | ------------------------------- |
| `/`                 | プロフィール、経歴、SNS         |
| `/application`      | 制作したアプリの紹介            |
| `/flatnews/privacy` | FlatNews プライバシーポリシー   |
| `/myplants/privacy` | うちの植物 プライバシーポリシー |

デザインは [Takuya Matsuyama](https://www.craftz.dog/) 氏のサイトを参考にしています。
