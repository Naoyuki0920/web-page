"use client";

import {
  Box,
  Flex,
  Heading,
  Container,
  Spacer,
  Stack,
  Text,
  Button,
  Menu,
  IconButton,
  ClientOnly,
  Skeleton,
} from "@chakra-ui/react";
import { useColorMode } from "./components/color-mode";
import NextLink from "next/link";
import { BsBicycle } from "react-icons/bs";
import { FaGithub, FaSun, FaMoon, FaBars } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

const SOURCE_URL = "https://github.com/Naoyuki0920/web-page";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="header"
      position="fixed"
      padding={2}
      top="0"
      zIndex={2}
      width="100%"
      css={{ backdropFilter: "blur(10px)" }}
      bg="#ffffff40"
      _dark={{ bg: "#1a202c40" }}
    >
      <Container display="flex" p={2} maxW="3xl">
        <Flex flex={1} justify="space-between" align="center">
          <Heading as="h1" size="md">
            <NextLink href="/">
              <Stack gap="8px" direction="row" align="center">
                <BsBicycle size="24px" />
                <Text>Naoyuki Masuda</Text>
              </Stack>
            </NextLink>
          </Heading>
          <Spacer />
          <Stack direction="row" gap="20px" align="center">
            <Box display={{ base: "none", md: "block" }}>
              <Button asChild size="md" variant="ghost">
                <NextLink href="/application">
                  <AiFillAndroid />
                  &nbsp;App
                </NextLink>
              </Button>
              <Button asChild size="md" variant="ghost">
                <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  &nbsp;Source
                </a>
              </Button>
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <IconButton variant="outline" aria-label="メニューを開く">
                    <FaBars />
                  </IconButton>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item value="app" asChild>
                    <NextLink href="/application">
                      <AiFillAndroid />
                      &nbsp;App
                    </NextLink>
                  </Menu.Item>
                  <Menu.Item value="source" asChild>
                    <a
                      href={SOURCE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      &nbsp;Source
                    </a>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Root>
            </Box>

            <ClientOnly fallback={<Skeleton boxSize="8" />}>
              <IconButton
                aria-label={
                  colorMode === "light"
                    ? "ダークモードに切り替え"
                    : "ライトモードに切り替え"
                }
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </IconButton>
            </ClientOnly>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
