"use client";

import {
  Box,
  Button,
  Heading,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaLink } from "react-icons/fa";
import SectionCard from "../components/section-card";
import MotionWrapper from "../components/motionWrapper";
import FeatureSection from "../components/feature-section";
import Footer from "../components/footer";

const FLATNEWS_STORE_URL = "https://apps.apple.com/jp/app/id6784650295?ct=web";
const MYPLANTS_STORE_URL = "https://apps.apple.com/jp/app/id6799691902?ct=web";
const HITOMAZU_STORE_URL = "https://apps.apple.com/jp/app/id6800239037?ct=web";

function AppRow({
  icon,
  alt,
  name,
  tagline,
}: {
  icon: string;
  alt: string;
  name: string;
  tagline: string;
}) {
  return (
    <Stack direction="row" align="center" gap="20px">
      <Box
        asChild
        boxSize="64px"
        borderRadius="22%"
        borderWidth="1px"
        borderColor="border"
      >
        <NextImage src={icon} alt={alt} width={256} height={256} />
      </Box>
      <Stack gap={0}>
        <Text as="b" fontSize="xl">
          {name}
        </Text>
        <Text color="fg.muted">{tagline}</Text>
      </Stack>
    </Stack>
  );
}

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4}>
          <Heading as="h1" size="2xl">
            広告のないアプリを、3つ作っています。
          </Heading>
          <Box w="20px" h="2px" bg="accent" />
          <Text>
            はじまりは、ニュースアプリで広告を誤タップしたことでした。読みたい記事より先に、指が広告に触れる。タップ範囲が大きくて、本文にたどり着けないこともある。世の中の動向を平たく知りたいだけなのに、と思いました。
          </Text>
          <Text>
            それで自分用に作ったのが FlatNews です。いまは分野の違う3つになりましたが、どれも同じ理由で作っています——自分が使いたいから。
          </Text>
          <Text>
            長く使われても私は1円も得をしません。引き止める仕掛けを作る理由が、設計のどこにもないからです。
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <AppRow
            icon="/image/flatnews-icon.png"
            alt="FlatNewsのアプリアイコン"
            name="FlatNews"
            tagline="静かで、正直なニュース。"
          />
          <Text>
            広告も、追跡も、無限スクロールもないニュースアプリです。並び順はメディア均等で、特定の媒体がフィードを独占しません。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/flatnews">
                <FaLink />
                &nbsp;詳しく見る
              </NextLink>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a
                href={FLATNEWS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                &nbsp;App Storeで見る
              </a>
            </Button>
          </Box>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <AppRow
            icon="/image/myplants-icon.png"
            alt="うちの植物のアプリアイコン"
            name="うちの植物"
            tagline="急かさない観葉植物の育成記録アプリ。"
          />
          <Text>
            水やりの予定日を表示しません。通知は朝1回、「そろそろ土を見てみましょう」だけです。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/myplants">
                <FaLink />
                &nbsp;詳しく見る
              </NextLink>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a
                href={MYPLANTS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                &nbsp;App Storeで見る
              </a>
            </Button>
          </Box>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <AppRow
            icon="/image/hitomazu-icon.png"
            alt="ひとまずのアプリアイコン"
            name="ひとまず"
            tagline="スマホの使いすぎに、ひと呼吸。"
          />
          <Text>
            ブロックせずに、開く前に「いま、何をしに?」と聞きます。引き返した回数を数えるアプリです。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <NextLink href="/hitomazu">
                <FaLink />
                &nbsp;詳しく見る
              </NextLink>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a
                href={HITOMAZU_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                &nbsp;App Storeで見る
              </a>
            </Button>
          </Box>
        </Stack>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="3つのアプリが、断ったもの">
          <Text>機能の一覧ではなく、実装しなかったものの一覧です。</Text>
          <Table.ScrollArea>
            <Table.Root size="sm">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>アプリ</Table.ColumnHeader>
                  <Table.ColumnHeader>対象</Table.ColumnHeader>
                  <Table.ColumnHeader>実装しなかったもの</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>FlatNews</Table.Cell>
                  <Table.Cell>ニュースの消費</Table.Cell>
                  <Table.Cell>無限スクロール・おすすめ・行動追跡</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>うちの植物</Table.Cell>
                  <Table.Cell>暮らしと通知</Table.Cell>
                  <Table.Cell>予定日の押し付け・ストリーク・バッジ</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>ひとまず</Table.Cell>
                  <Table.Cell>スクリーンタイム</Table.Cell>
                  <Table.Cell>強制ブロック・罰・前週比の赤い数字</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <FeatureSection title="よくある質問">
          <Stack gap={5}>
            <Stack gap={2}>
              <Heading as="h3" size="md">広告のないニュースアプリはありますか。</Heading>
              <Text>
                FlatNewsは、広告のないニュースアプリです。26媒体・約2,400記事/日を、特定の媒体に偏らない並びで表示します。行動追跡もおすすめもなく、収益はFlatNews+（月400円・年3,000円）だけです。広告は今後も入れません。
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading as="h3" size="md">
                水やりを催促しない観葉植物アプリはありますか。
              </Heading>
              <Text>
                うちの植物は、水やりの予定日を表示しない育成記録アプリです。通知は朝1回、「そろそろ土を見てみましょう」だけで、水をあげるかどうかはあなたが決めます。
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading as="h3" size="md">
                スマホをブロックしないスクリーンタイム アプリはありますか。
              </Heading>
              <Text>
                ひとまずは、アプリをブロックしません。開く前にシールドが「いま、何をしに?」と聞くだけです。引き返した回数を数え、前週比や罰、ストリークはありません。
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading as="h3" size="md">なぜ広告を入れないのですか。</Heading>
              <Text>
                広告で収益を得ると、あなたの滞在時間が私の収入になります。その構造のままでは、静かなアプリは作れません。だから3つとも、収益は少額の課金だけにしています。
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading as="h3" size="md">利用データはどこに保存されますか。</Heading>
              <Text>
                3つとも、あなたの記録は端末とあなたのiCloudにだけ保存されます。開発者のサーバーにユーザーのデータを置きません。「信じてください」ではなく、構造的に集められない設計です。
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading as="h3" size="md">誰が作っていますか。</Heading>
              <Text>Naoyuki Masudaが、個人で開発しています。</Text>
            </Stack>
          </Stack>
        </FeatureSection>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Text>
            もしあなたが、アプリを閉じたあとの疲労感に心当たりがあるなら。3つとも
            App Storeで公開しています。気になったものから試してみてください。
          </Text>
          <Box>
            <Button asChild size="sm" variant="ghost">
              <a
                href={FLATNEWS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                &nbsp;App StoreでFlatNewsを見る
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a
                href={MYPLANTS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                &nbsp;App Storeでうちの植物を見る
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a
                href={HITOMAZU_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                &nbsp;App Storeでひとまずを見る
              </a>
            </Button>
          </Box>
        </Stack>
      </SectionCard>
      <Footer />
    </MotionWrapper>
  );
}
