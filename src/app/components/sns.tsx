"use client";

import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SNS() {
  return (
    <>
      <Button asChild size="sm" variant="ghost">
        <a href="https://github.com/Naoyuki0920">
          <FaGithub />&nbsp;GitHub
        </a>
      </Button>
      <Button asChild size="sm" variant="ghost">
        <a href="https://x.com/naoyuki_m_dev">
          <FaXTwitter />&nbsp;X
        </a>
      </Button>
    </>
  );
}
