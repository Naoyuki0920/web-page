"use client";

import { Box, Heading, Stack } from "@chakra-ui/react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Stack gap={2} mb={3}>
      <Heading as="h2" fontSize="xl">
        {children}
      </Heading>
      <Box w="20px" h="2px" bg="accent" />
    </Stack>
  );
}
