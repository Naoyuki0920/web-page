"use client";

import { Button } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SNS() {
  return (
    <>
      <Button asChild size="sm" variant="ghost">
        <a href="https://github.com/Naoyuki0920">
          <FaGithub />&nbsp;GitHub
        </a>
      </Button>
      <Button asChild size="sm" variant="ghost">
        <a href="https://www.linkedin.com/in/%E5%B0%9A%E4%B9%8B-%E5%A2%97%E7%94%B0-5a906a31b/">
          <FaLinkedinIn />&nbsp;LinkedIn
        </a>
      </Button>
      <Button asChild size="sm" variant="ghost">
        <a href="https://twitter.com/hello_naoyuki09">
          <FaTwitter />&nbsp;Twitter
        </a>
      </Button>
      <Button asChild size="sm" variant="ghost">
        <a href="https://www.instagram.com/naoyuki110920/">
          <FaInstagram />&nbsp;Instagram
        </a>
      </Button>
    </>
  );
}
