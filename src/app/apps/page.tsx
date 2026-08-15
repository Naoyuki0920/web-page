"use client";

import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaLink } from "react-icons/fa";
import SectionCard from "../components/section-card";
import MotionWrapper from "../components/motionWrapper";
import Footer from "../components/footer";

const FLATNEWS_STORE_URL = "https://apps.apple.com/jp/app/id6784650295?ct=web";

const PREPARING_NOTE =
  "App Storeでの公開を準備しています。公開日は、約束できる段階になってから書きます。";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Stack gap={4}>
          <Heading size="2xl">広告のないアプリを、3つ作っています。</Heading>
          <Text>
            ニュース、観葉植物の記録、スクリーンタイム。分野は違いますが、3つとも、実装しないことを先に決めてから作りました。
          </Text>
          <Text>
            どれも、あなたが長く使っても私は1円も得をしない設計です。だから、あなたを引き止める理由が、どこにもありません。
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Stack direction="row" align="center" gap="20px">
            <Image
              src="/image/flatnews-icon.png"
              alt="FlatNewsのアプリアイコン"
              boxSize="64px"
              borderRadius="22%"
            />
            <Stack gap={0}>
              <Text as="b" fontSize="xl">
                FlatNews
              </Text>
              <Text>静かで、正直なニュース。</Text>
            </Stack>
          </Stack>
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
          <Stack direction="row" align="center" gap="20px">
            <Image
              src="/image/myplants-icon.png"
              alt="うちの植物のアプリアイコン"
              boxSize="64px"
              borderRadius="22%"
            />
            <Stack gap={0}>
              <Text as="b" fontSize="xl">
                うちの植物
              </Text>
              <Text>急かさない観葉植物の育成記録アプリ。</Text>
            </Stack>
          </Stack>
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
          </Box>
          <Text fontSize="sm" color="gray.500">
            {PREPARING_NOTE}
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Stack direction="row" align="center" gap="20px">
            <Image
              src="/image/hitomazu-icon.png"
              alt="ひとまずのアプリアイコン"
              boxSize="64px"
              borderRadius="22%"
            />
            <Stack gap={0}>
              <Text as="b" fontSize="xl">
                ひとまず
              </Text>
              <Text>スマホの使いすぎに、ひと呼吸。</Text>
            </Stack>
          </Stack>
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
          </Box>
          <Text fontSize="sm" color="gray.500">
            {PREPARING_NOTE}
          </Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">3つのアプリが、断ったもの</Heading>
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
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Heading size="lg">よくある質問</Heading>

          <Heading size="md">広告のないニュースアプリはありますか。</Heading>
          <Text>
            FlatNewsは、広告のないニュースアプリです。26媒体・約2,400記事/日を、特定の媒体に偏らない並びで表示します。行動追跡もおすすめもなく、収益はFlatNews+（月400円・年3,000円）だけです。広告は今後も入れません。
          </Text>

          <Heading size="md">
            水やりを催促しない観葉植物アプリはありますか。
          </Heading>
          <Text>
            うちの植物は、水やりの予定日を表示しない育成記録アプリです。通知は朝1回、「そろそろ土を見てみましょう」だけで、水をあげるかどうかはあなたが決めます。現在、App
            Storeでの公開を準備しています。
          </Text>

          <Heading size="md">
            スマホをブロックしないスクリーンタイム アプリはありますか。
          </Heading>
          <Text>
            ひとまずは、アプリをブロックしません。開く前にシールドが「いま、何をしに?」と聞くだけです。引き返した回数を数え、前週比や罰、ストリークはありません。現在、App
            Storeでの公開を準備しています。
          </Text>

          <Heading size="md">なぜ広告を入れないのですか。</Heading>
          <Text>
            広告で収益を得ると、あなたの滞在時間が私の収入になります。その構造のままでは、静かなアプリは作れません。だから3つとも、収益は少額の課金だけにしています。
          </Text>

          <Heading size="md">利用データはどこに保存されますか。</Heading>
          <Text>
            3つとも、あなたの記録は端末とあなたのiCloudにだけ保存されます。開発者のサーバーにユーザーのデータを置きません。「信じてください」ではなく、構造的に集められない設計です。
          </Text>

          <Heading size="md">誰が作っていますか。</Heading>
          <Text>Naoyuki Masudaが、個人で開発しています。</Text>
        </Stack>
      </SectionCard>

      <SectionCard>
        <Stack gap={4}>
          <Text>
            もしあなたが、アプリを閉じたあとの疲労感に心当たりがあるなら。まず、公開済みのFlatNewsから試してみてください。
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
          </Box>
        </Stack>
      </SectionCard>
      <Footer />
    </MotionWrapper>
  );
}
