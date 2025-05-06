"use client";

import { Image, Text, Center, Link } from "@chakra-ui/react";
import NameBox from "./components/name-box";
import Title from "./components/title";
import SectionCard from "./components/section-card";
import Timeline from "./components/timeline";
import SNS from "./components/sns";
import Motion from "./components/motionWrapper";
import MotionWrapper from "./components/motionWrapper";

export default function Home() {
  return (
    <MotionWrapper>
      <Image src="./image/roadbike.jpg" borderRadius="10px" alt="img"></Image>
      <NameBox />
      <SectionCard>
        <Title>About</Title>
        <Text>
          2024年4月から、NTT西日本でエンジニアとして働いています。NTTビジネスソリューションズ バリューデザイン部で、セキュリティログ監視システムの設計、開発を行っています。
          <br />
          
        </Text>
      </SectionCard>
      <SectionCard>
        <Title>Bio</Title>
        <Timeline />
      </SectionCard>
      <SectionCard>
        <Title>Fav</Title>
        <Text>ロードバイク、読書</Text>
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
    </MotionWrapper>
  );
}
