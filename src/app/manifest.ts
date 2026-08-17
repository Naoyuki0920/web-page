import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Naoyuki Masuda",
    short_name: "Naoyuki Masuda",
    description:
      "Naoyuki Masudaのポートフォリオサイト。制作したアプリや経歴を掲載しています。",
    start_url: "/",
    display: "browser",
    background_color: "#F0EFEA",
    theme_color: "#F0EFEA",
    icons: [
      { src: "/favicon.ico", sizes: "128x128", type: "image/x-icon" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
