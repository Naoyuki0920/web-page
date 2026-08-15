"use client";

import { Box, Stack, Text } from "@chakra-ui/react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Stack gap={2} mb={3}>
      <Text as={"b"} fontSize="xl">
        {children}
      </Text>
      <Box w="20px" h="2px" bg="accent" />
    </Stack>
  );
}
