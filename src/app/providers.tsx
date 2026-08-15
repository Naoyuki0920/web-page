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

// アプリ3作と同じ世界観: 地 #F0EFEA(ストアスクショの地色)、墨色の文字、
// 淡い罫線、アクセントは「閉じない円」の #44576C(ダークは #9DB2C7)。
const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: fontStack },
        body: { value: fontStack },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: { _light: "#F0EFEA", _dark: "#191917" } },
          subtle: { value: { _light: "#EAE8E1", _dark: "#212120" } },
          muted: { value: { _light: "#E4E2DA", _dark: "#272725" } },
          emphasized: { value: { _light: "#DEDCD3", _dark: "#2E2E2B" } },
          panel: { value: { _light: "#F7F6F2", _dark: "#212120" } },
        },
        fg: {
          DEFAULT: { value: { _light: "#2D3748", _dark: "#E8E6E0" } },
          muted: { value: { _light: "#6B7280", _dark: "#A5A29A" } },
          subtle: { value: { _light: "#9CA3AF", _dark: "#807D75" } },
        },
        border: {
          DEFAULT: { value: { _light: "#DEDDD6", _dark: "#3A3A35" } },
          muted: { value: { _light: "#E5E4DD", _dark: "#2E2E2A" } },
          subtle: { value: { _light: "#ECEAE3", _dark: "#272724" } },
        },
        accent: {
          DEFAULT: { value: { _light: "#44576C", _dark: "#9DB2C7" } },
        },
        gray: {
          subtle: { value: { _light: "#E7E5DE", _dark: "#262623" } },
          muted: { value: { _light: "#DFDDD5", _dark: "#2C2C29" } },
          emphasized: { value: { _light: "#D6D4CB", _dark: "#333330" } },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "bg",
      color: "fg",
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
