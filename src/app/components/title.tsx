"use client";

import { Stack, Text } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" align="center">
      <FaLink style={{ fontSize: "1.25rem" }} />
      <Text as={"b"} fontSize="xl">
        {children}
      </Text>
    </Stack>
  );
}
