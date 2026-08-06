"use client";

import { Text } from "@chakra-ui/react";
import NameBox from "./components/name-box";
import Title from "./components/title";
import SectionCard from "./components/section-card";
import Timeline from "./components/timeline";
import SNS from "./components/sns";
import Footer from "./components/footer";
import MotionWrapper from "./components/motionWrapper";

export default function Home() {
  return (
    <MotionWrapper>
      <NameBox />
      <SectionCard>
        <Title>About</Title>
        <Text>
          2024年4月から、ソフトウェアエンジニアとして働いています。セキュリティログ監視・分析サービスのシステム設計と開発を行っています。
        </Text>
      </SectionCard>
      <SectionCard>
        <Title>Bio</Title>
        <Timeline />
      </SectionCard>
      <SectionCard>
        <Title>Fav</Title>
        <Text>ロードバイク、読書、自作キーボード</Text>
      </SectionCard>
      <SectionCard>
        <Title>SNS</Title>
        <SNS />
      </SectionCard>
      <Footer />
    </MotionWrapper>
  );
}
