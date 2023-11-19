'use client'

import { Container } from "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as="main"
      maxW="container.sm"
      minH="calc(100vh - 115px - 2rem)"
      marginTop="56px"
      backgroundColor={"lightgrey"}
    >
      {children}
    </Container>
  );
}