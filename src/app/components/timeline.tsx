"use client";

import { Flex, Text, Stack, Spacer } from "@chakra-ui/react";

export default function Timeline() {
  return (
    <Stack direction="row">
      <Spacer boxSize="5px"/>
      <div>
        <Stack spacing="20px" direction="row">
          <Text as="b">2020</Text>
          <Text>
            Entered Kanazawa Institute of Technology, Faculty of Engineering,
            Department of Computer Science and Engineering
          </Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2021</Text>
          <Text>みらいごとラボ join</Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2022</Text>
          <Text>のっティバスどこ Kotlin ver release</Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2023</Text>
          <Text>のっティバスどこ Flutter ver release</Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2024~</Text>
          <Text>Work as an engineer at NTT West Japan</Text>
        </Stack>
      </div>
    </Stack>
  );
}
