"use client";

import { Image, Text, Center } from "@chakra-ui/react";
import NameBox from "./components/name-box";
import Title from "./components/title";
import SectionCard from "./components/section-card";
import Timeline from "./components/timeline";
import SNS from "./components/sns";

export default function Home() {
  return (
    <div>
      <Image src="./image/roadbike.jpg"></Image>
      <NameBox />
      <SectionCard>
        <Title>About</Title>
        <Text>
          I am a college student interested in web and mobile development. I
          have been involved in many content production projects. I will
          continue to move forward in whatever direction I feel comfortable.
        </Text>
      </SectionCard>
      <SectionCard>
        <Title>Bio</Title>
        <Timeline />
      </SectionCard>
      <SectionCard>
        <Title>Fav</Title>
        <Text>Road Bike, Reading, Game(Genshin Impact)</Text>
      </SectionCard>
      <SectionCard>
        <Title>SNS</Title>
        <SNS />
      </SectionCard>
      <SectionCard>
        <Center>
          <Text fontSize="sm">
            © 2023 Naoyuki Masuda. All Rights Reserved.
          </Text>
        </Center>
      </SectionCard>
    </div>
  );
}
