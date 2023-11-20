"use client";

import { Image, Text, Center, Link, Stack, Spacer } from "@chakra-ui/react";
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
        <Text marginLeft="5px">
          I am a college student interested in web and mobile development. I
          have been involved in many content production projects. I will
          continue to move forward in whatever direction I feel comfortable. I
          created this page to try out Next13&apos;s App Router.
        </Text>
      </SectionCard>
      <SectionCard>
        <Title>Bio</Title>
        <Timeline />
      </SectionCard>
      <SectionCard>
        <Title>Fav</Title>
        <Text marginLeft="5px">Road Bike, Reading, Game(Genshin Impact)</Text>
      </SectionCard>
      <SectionCard>
        <Title>SNS</Title>
        <SNS />
      </SectionCard>
      <SectionCard>
        <Center>
          <Text fontSize="xs" color="BlackAlpha 700">
            Based on{" "}
            <Link href="https://www.craftz.dog/">Takuya Matsuyama's</Link>{" "}
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
