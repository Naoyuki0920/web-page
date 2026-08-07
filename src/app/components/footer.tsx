"use client";

import { Center, Text, Link } from "@chakra-ui/react";
import SectionCard from "./section-card";

export default function Footer() {
  return (
    <SectionCard>
      <Center>
        <Text fontSize="xs" color="fg.muted">
          Based on{" "}
          <Link
            href="https://www.craftz.dog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Takuya Matsuyama&apos;s
          </Link>{" "}
          design
        </Text>
      </Center>
      <Center>
        <Text fontSize="xs" color="fg.muted">
          © 2026 Naoyuki Masuda. All Rights Reserved.
        </Text>
      </Center>
    </SectionCard>
  );
}
