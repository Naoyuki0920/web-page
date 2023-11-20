"use client";

import { Button } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SNS() {
  return (
    <>
      <Button
        leftIcon={<FaGithub />}
        as="a"
        href="https://github.com/Naoyuki0920"
        colorScheme="grey"
        variant="ghost"
      >
        GitHub
      </Button>
      <Button
        leftIcon={<FaTwitter />}
        as="a"
        href="https://twitter.com/hello_naoyuki09"
        colorScheme="grey"
        variant="ghost"
      >
        Twitter
      </Button>
      <Button
        leftIcon={<FaInstagram />}
        as="a"
        href="https://www.instagram.com/naoyuki110920/"
        colorScheme="grey"
        variant="ghost"
      >
        Instagram
      </Button>
    </>
  );
}
