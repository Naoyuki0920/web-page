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
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsBicycle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaGithub, FaSun } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  MoonIcon,
} from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#ffffff40", "#1a202c40");
  return (
    <Box
      as="header"
      position="fixed"
      padding={2}
      top="0"
      zIndex={2}
      width="100%"
      css={{ backdropFilter: "blur(10px)" }}
      bg={bg}
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
              <Stack spacing="4px" direction="row" align="center">
                <IconContext.Provider value={{ size: "24px" }}>
                  <BsBicycle />
                </IconContext.Provider>
                <Spacer boxSize="3px" />
                <Text>Naoyuki Masuda</Text>
              </Stack>
            </NextLink>
          </Heading>
          <Spacer />
          <Stack direction="row" spacing="20px">
            <Box display={{ base: "none", md: "block" }}>
              <Button
                leftIcon={<AiFillAndroid />}
                size="md"
                as="a"
                href="./application"
                colorScheme="grey"
                variant="ghost"
              >
                App
              </Button>
              <Button
                leftIcon={<FaGithub />}
                size="md"
                as="a"
                href="https://github.com/Naoyuki0920/web-page"
                colorScheme="grey"
                variant="ghost"
              >
                Source
              </Button>
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <Button
                    leftIcon={<AiFillAndroid />}
                    size="md"
                    as="a"
                    href="./application"
                    colorScheme="grey"
                    variant="ghost"
                  >
                    App
                  </Button>
                  <Button
                    leftIcon={<FaGithub />}
                    size="md"
                    as="a"
                    href="https://github.com/Naoyuki0920/web-page"
                    colorScheme="grey"
                    variant="ghost"
                  >
                    Source
                  </Button>
                </MenuList>
              </Menu>
            </Box>

            <IconButton
              aria-label="DarkMode Switch"
              icon={colorMode === "light" ? <MoonIcon /> : <FaSun />} //自分の好みでSunアイコンはreact-iconsを使用しています
              onClick={toggleColorMode}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
