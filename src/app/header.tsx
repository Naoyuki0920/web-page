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
import { IconContext } from "react-icons";
import { FaGithub, FaSun, FaMoon, FaBars } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

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
      <Container display="flex" p={2} maxW="container.md">
        <Flex flex={1} justify="space-between">
          <Heading
            as="h1"
            size="md"
            textAlign="center"
            top="0"
            bottom="0"
            margin="auto"
          >
            <NextLink href="/">
              <Stack gap="4px" direction="row" align="center">
                <IconContext.Provider value={{ size: "24px" }}>
                  <BsBicycle />
                </IconContext.Provider>
                <Spacer boxSize="3px" />
                <Text>Naoyuki Masuda</Text>
              </Stack>
            </NextLink>
          </Heading>
          <Spacer />
          <Stack direction="row" gap="20px">
            <Box display={{ base: "none", md: "block" }}>
              <Button asChild size="md" variant="ghost">
                <a href="./application">
                  <AiFillAndroid />&nbsp;App
                </a>
              </Button>
              <Button asChild size="md" variant="ghost">
                <a href="https://github.com/Naoyuki0920/web-page">
                  <FaGithub />&nbsp;Source
                </a>
              </Button>
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <IconButton variant="outline" aria-label="Options">
                    <FaBars />
                  </IconButton>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item value="app" asChild>
                    <a href="./application">
                      <AiFillAndroid />&nbsp;App
                    </a>
                  </Menu.Item>
                  <Menu.Item value="source" asChild>
                    <a href="https://github.com/Naoyuki0920/web-page">
                      <FaGithub />&nbsp;Source
                    </a>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Root>
            </Box>

            <ClientOnly fallback={<Skeleton boxSize="8" />}>
              <IconButton
                aria-label="DarkMode Switch"
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
