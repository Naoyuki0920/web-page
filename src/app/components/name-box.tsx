"use client";

import { Text, Flex, Stack, Spacer, Image, Box, Center } from "@chakra-ui/react";

export default function NameBox() {
  return (
    <>
      <Box display={{ base: "none", sm: "block" }}>
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto" padding={5}>
          <Stack direction={["row", "column"]} align={["center", "stretch"]}>
            <Text as="b" fontSize="4xl">
              Naoyuki Masuda
            </Text>
            <Text>Android App Creator & Network Engineer</Text>
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
      <Box display={{ base: "block", sm: "none" }}>
        
        <Center><Text as="b" fontSize="4xl" width="100%" textAlign="center">
          Naoyuki Masuda
        </Text></Center>
        <Stack direction="row" align={["center", "stretch"]}>
          <Text textAlign="right">Android App Creator & Network Engineer</Text>
          <Spacer />
          <Image
            borderRadius="full"
            boxSize="100px"
            src="./image/profile.jpg"
            alt="img"
          ></Image>
        </Stack>
      </Box>
    </>
  );
}
