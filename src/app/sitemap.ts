import type { MetadataRoute } from "next";

const BASE_URL = "https://www.naoyuki0920.com";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/apps", priority: 0.9 },
  { path: "/flatnews", priority: 0.8 },
  { path: "/myplants", priority: 0.8 },
  { path: "/hitomazu", priority: 0.8 },
  { path: "/application", priority: 0.5 },
  { path: "/flatnews/privacy", priority: 0.3 },
  { path: "/myplants/privacy", priority: 0.3 },
  { path: "/hitomazu/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
