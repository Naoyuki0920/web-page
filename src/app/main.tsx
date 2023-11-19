'use client'

import { Box, Container, Flex, Heading, Spacer, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as="main"
      maxW="container.md"
      minH="calc(100vh - 115px - 2rem)"
      marginTop="56px"
      backgroundColor={"lightgrey"}
    >
      {children}
    </Container>
  );
}