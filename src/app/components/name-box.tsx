"use client";

import { Text, Flex, Stack, Spacer, Image, Box } from "@chakra-ui/react";

export default function NameBox() {
  return (
    <Box display={{ base: "none", sm: "block" }}>
      <Flex flex={1} justify="space-between" maxW="5xl" mx="auto" padding={5}>
        <Stack direction={["row", "column"]} align={["center", "stretch"]}>
          <Text as="b" fontSize="4xl">
            Naoyuki Masuda
          </Text>
          <Text>Android App Creator & Security Engineer</Text>
        </Stack>
        <Spacer />
        <Image
          borderRadius="full"
          boxSize="100px"
          src="./image/profile.jpg"
          alt="img"
        ></Image>
      </Flex>
    </Box>
  );
}
