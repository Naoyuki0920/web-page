"use client";

import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
        leftIcon={<FaXTwitter />}
        as="a"
        href="https://x.com/naoyuki_m_dev"
        colorScheme="grey"
        variant="ghost"
      >
        X
      </Button>
    </>
  );
}
