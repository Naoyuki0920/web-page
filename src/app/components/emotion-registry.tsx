"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

/**
 * Chakra UI が内部で使う Emotion のスタイルを、SSR 時に <head> へまとめて挿入する。
 * これがないと、サーバーは <style> をコンポーネントの直前に出力するのに対し
 * クライアントは <head> へ挿入するため、ハイドレーションの不一致が起きる。
 */
export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const emotionCache = createCache({ key: "css" });
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
