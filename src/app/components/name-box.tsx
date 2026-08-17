"use client";

import { Text, Flex, Heading, Stack, Spacer, Box } from "@chakra-ui/react";
import NextImage from "next/image";

export default function NameBox() {
  return (
    <Box>
      <Flex
        direction={{ base: "column", sm: "row" }}
        align={{ base: "center", sm: "flex-start" }}
        justify="space-between"
        maxW="5xl"
        mx="auto"
        padding={5}
      >
        <Stack align="flex-start" gap={2}>
          <Heading as="h1" fontSize={{ base: "3xl", sm: "4xl" }}>
            Naoyuki Masuda
          </Heading>
          <Text>iOS App Creator &amp; Security Engineer</Text>
        </Stack>
        <Spacer />
        <Box
          asChild
          borderRadius="full"
          boxSize={{ base: "80px", sm: "100px" }}
          mt={{ base: 4, sm: 0 }}
        >
          <NextImage
            src="/image/profile03.png"
            alt="Naoyuki Masudaのプロフィール写真"
            width={400}
            height={400}
            priority
          />
        </Box>
      </Flex>
    </Box>
  );
}
