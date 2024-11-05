"use client";

import { Text, Flex, Stack, Spacer, Image, Box } from "@chakra-ui/react";

export default function NameBox() {
  return (
    <Box>
      <Flex
        flex={1}
        direction={{ base: "column", sm: "row" }}
        align={{ base: "center", sm: "flex-start" }}
        justify="space-between"
        maxW="5xl"
        mx="auto"
        padding={5}
      >
        <Stack
          direction={{ base: "column", sm: "column" }}
          align={{ base: "flex-start", sm: "flex-start" }} // 左寄せに変更
          spacing={2}
        >
          <Text as="b" fontSize={{ base: "3xl", sm: "4xl" }} textAlign="left">
            Naoyuki Masuda
          </Text>
          <Text textAlign="left">Android App Creator & Security Engineer</Text>
        </Stack>
        <Spacer />
        <Image
          borderRadius="full"
          boxSize={{ base: "80px", sm: "100px" }}
          src="./image/profile.jpg"
          alt="img"
          mt={{ base: 4, sm: 0 }}
        />
      </Flex>
    </Box>
  );
}
