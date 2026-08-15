"use client";

import { Container } from "@chakra-ui/react";

export default function SectionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      px={5}
      py={8}
      borderTopWidth="1px"
      borderColor="border.muted"
      _first={{ borderTopWidth: "0" }}
    >
      {children}
    </Container>
  );
}
