"use client";

import { Text, Flex, Stack, Spacer, Image, Box } from "@chakra-ui/react";

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
          <Text as="b" fontSize={{ base: "3xl", sm: "4xl" }}>
            Naoyuki Masuda
          </Text>
          <Text>iOS App Creator &amp; Security Engineer</Text>
        </Stack>
        <Spacer />
        <Image
          borderRadius="full"
          boxSize={{ base: "80px", sm: "100px" }}
          src="/image/profile03.png"
          alt="増田尚幸のプロフィール写真"
          mt={{ base: 4, sm: 0 }}
        />
      </Flex>
    </Box>
  );
}
