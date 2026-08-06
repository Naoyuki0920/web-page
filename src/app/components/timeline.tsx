"use client";

import { Text, Stack, Link } from "@chakra-ui/react";

export default function Timeline() {
  return (
    <Stack direction="row">
      <div>
        <Stack spacing="20px" direction="row">
          <Text as="b">2020</Text>
          <Text>大学 情報工学科 入学</Text>
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
          <Text>ソフトウェアエンジニアとして就職</Text>
        </Stack>
      </div>
    </Stack>
  );
}
