"use client";

import { Text, Stack, Link } from "@chakra-ui/react";

export default function Timeline() {
  return (
    <Stack direction="row">
      <div>
        <Stack spacing="20px" direction="row">
          <Text as="b">2020</Text>
          <Text>
            金沢工業大学 工学部 情報工学科 入学
          </Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2021</Text>
          <Text>
            <Link href="https://miraigotolab.co.jp/" isExternal>
              みらいごとラボ join
            </Link>
          </Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2022</Text>
          <Text>
            <Link href="https://play.google.com/store/apps/details?id=com.busstopprj.buslocationsystem&hl=ja&gl=US">
              のっティバスどこ
            </Link>{" "}
            Kotlin ver リリース
          </Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2023</Text>
          <Text>
            <Link href="https://play.google.com/store/apps/details?id=com.busstopprj.buslocationsystem&hl=ja&gl=US">
              のっティバスどこ
            </Link>{" "}
            Flutter ver リリース
          </Text>
        </Stack>
        <Stack spacing="20px" direction="row">
          <Text as="b">2024</Text>
          <Text>NTT西日本入社</Text>
        </Stack>
      </div>
    </Stack>
  );
}
