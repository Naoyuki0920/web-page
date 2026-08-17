"use client";

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import NextImage from "next/image";

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
          <Heading as="h2" size="lg">{title}</Heading>
          <Box w="20px" h="2px" bg="accent" />
        </Stack>
        {children}
      </Stack>
      {image && (
        <Box
          asChild
          w="220px"
          h="auto"
          borderRadius="xl"
          alignSelf={{ base: "center", sm: "flex-start" }}
        >
          {/* スクショは全て appstore_6.9_framed 由来の 369x800 */}
          <NextImage src={image} alt={alt ?? ""} width={369} height={800} />
        </Box>
      )}
    </Flex>
  );
}
