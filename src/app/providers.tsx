"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={extendTheme({
          fonts: {
            heading: "M PLUS Rounded 1c, sans-serif;",
            body: "M PLUS Rounded 1c, sans-serif;",
          },
        })}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
