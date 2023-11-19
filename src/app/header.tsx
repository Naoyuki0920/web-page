'use client'

import { Box, Flex, Heading, Container, Spacer, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box
      as="header"
      position="fixed"
      padding={2}
      top="0"
      zIndex={2}
      width="100%"
      css={{ backdropFilter: 'blur(10px)' }}
      bg='#ffffff40'>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="md" textAlign="center">
            <NextLink href="/">Naoyuki Masuda</NextLink>
          </Heading>
          <Spacer />
          <Stack
            spacing="40px"
            direction={['column', 'row']}
          >
            <NextLink href="/about" p={2}>About</NextLink>
            <NextLink href="/story" p={2}>Story</NextLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}