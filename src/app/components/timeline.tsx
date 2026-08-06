"use client";

import { Text, Stack, Link } from "@chakra-ui/react";

const NOTTY_URL =
  "https://play.google.com/store/apps/details?id=com.busstopprj.buslocationsystem&hl=ja&gl=JP";

const entries = [
  { year: "2020", body: "金沢工業大学 情報工学科 入学" },
  { year: "2022", link: "のっティバスどこ", body: " Kotlin ver リリース" },
  { year: "2023", link: "のっティバスどこ", body: " Flutter ver リリース" },
  { year: "2024", body: "ソフトウェアエンジニアとして就職" },
];

export default function Timeline() {
  return (
    <Stack gap={1}>
      {entries.map((entry) => (
        <Stack key={entry.year} gap="20px" direction="row">
          <Text as="b">{entry.year}</Text>
          <Text>
            {entry.link && (
              <Link href={NOTTY_URL} target="_blank" rel="noopener noreferrer">
                {entry.link}
              </Link>
            )}
            {entry.body}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
}
