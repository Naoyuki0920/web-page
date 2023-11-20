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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsBicycle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

export default function Header() {
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
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex flex={1} justify="space-between">
          <Heading as="h1" size="md" textAlign="center">
            <NextLink href="/">
              <Stack spacing="4px" direction="row">
                <IconContext.Provider value={{ size: "24px" }}>
                  <BsBicycle />
                </IconContext.Provider>
                <Spacer boxSize="3px" />
                <Text>Naoyuki Masuda</Text>
              </Stack>
            </NextLink>
          </Heading>
          <Spacer />
          <Stack direction="row" spacing="30px">
            <Button
              leftIcon={<AiFillAndroid />}
              size="sx"
              as="a"
              href="./application"
              colorScheme="grey"
              variant="ghost"
            >
              App
            </Button>
            <Button
              leftIcon={<FaGithub />}
              size="sx"
              as="a"
              href="https://github.com/Naoyuki0920/web-page"
              colorScheme="grey"
              variant="ghost"
            >
              Source
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
