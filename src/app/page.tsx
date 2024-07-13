"use client";

import { Image, Text, Center, Link } from "@chakra-ui/react";
import NameBox from "./components/name-box";
import Title from "./components/title";
import SectionCard from "./components/section-card";
import Timeline from "./components/timeline";
import SNS from "./components/sns";

export default function Home() {
  return (
    <>
      <Image src="./image/roadbike.jpg" borderRadius="10px" alt="img"></Image>
      <NameBox />
      <SectionCard>
        <Title>About</Title>
        <Text>
          2024年4月から、NTT西日本でエンジニアとして働いています。
          大学では情報工学、CSを学び、現在はセキュリティ監視システムの設計、開発を行っています。
          将来は、IOWNを用いたシステム開発に携わってみたいと考えています。
        </Text>
      </SectionCard>
      <SectionCard>
        <Title>Bio</Title>
        <Timeline />
      </SectionCard>
      <SectionCard>
        <Title>Fav</Title>
        <Text>ロードバイク、読書、ゲーム（原神）</Text>
      </SectionCard>
      <SectionCard>
        <Title>SNS</Title>
        <SNS />
      </SectionCard>
      <SectionCard>
        <Center>
          <Text fontSize="xs" color="BlackAlpha 700">
            Based on{" "}
            <Link href="https://www.craftz.dog/">Takuya Matsuyama&apos;s</Link>{" "}
            design
          </Text>
        </Center>
        <Center>
          <Text fontSize="xs" color="BlackAlpha 700">
            © 2023 Naoyuki Masuda. All Rights Reserved.
          </Text>
        </Center>
      </SectionCard>
    </>
  );
}
