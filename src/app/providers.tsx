"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { EmotionRegistry } from "./components/emotion-registry";

const fontStack =
  "var(--font-ibm-plex-sans-jp), system-ui, -apple-system, 'Hiragino Sans', 'Noto Sans JP', sans-serif";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: fontStack },
        body: { value: fontStack },
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </EmotionRegistry>
  );
}
