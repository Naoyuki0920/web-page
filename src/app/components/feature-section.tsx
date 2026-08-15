"use client";

import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";

export default function FeatureSection({
  title,
  image,
  alt,
  children,
}: {
  title: string;
  image?: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 5, sm: 8 }}>
      <Stack gap={4} flex="1" minW={0}>
        <Stack gap={2}>
          <Heading size="lg">{title}</Heading>
          <Box w="20px" h="2px" bg="accent" />
        </Stack>
        {children}
      </Stack>
      {image && (
        <Image
          src={image}
          alt={alt}
          width="220px"
          borderRadius="xl"
          alignSelf={{ base: "center", sm: "flex-start" }}
        />
      )}
    </Flex>
  );
}
