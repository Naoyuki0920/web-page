"use client";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "M PLUS Rounded 1c, sans-serif" },
        body: { value: "M PLUS Rounded 1c, sans-serif" },
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
