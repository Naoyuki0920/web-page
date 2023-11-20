"use client";

import { Flex, Text, Stack, Container } from "@chakra-ui/react";

export default function Timeline() {
  return (
    <>
      <Stack spacing="20px" direction={["column", "row"]}>
        <Text as="b">2020</Text>
        <Text>
          Entered Kanazawa Institute of Technology, Faculty of Engineering,
          Department of Computer Science and Engineering
        </Text>
      </Stack>
      <Stack spacing="20px" direction={["column", "row"]}>
        <Text as="b">2021</Text>
        <Text>みらいごとラボ join</Text>
      </Stack>
      <Stack spacing="20px" direction={["column", "row"]}>
        <Text as="b">2022</Text>
        <Text>のっティバスどこ Kotlin ver release</Text>
      </Stack>
      <Stack spacing="20px" direction={["column", "row"]}>
        <Text as="b">2023</Text>
        <Text>のっティバスどこ Flutter ver release</Text>
      </Stack>
      <Stack spacing="20px" direction={["column", "row"]}>
        <Text as="b">2024~</Text>
        <Text>Worked as an engineer at NTT West Japan</Text>
      </Stack>
    </>
  );
}
