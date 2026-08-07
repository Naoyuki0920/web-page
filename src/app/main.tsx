"use client";

import { Container } from "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as="main"
      maxW="2xl"
      minH="calc(100vh - 115px - 2rem)"
      marginTop="72px"
    >
      {children}
    </Container>
  );
}
