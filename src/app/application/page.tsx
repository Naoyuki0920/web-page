// app/page.tsx
"use client";

import {
  Image,
  Text,
  Button,
  Spacer,
  Stack,
  Center,
  Link,
  Box,
} from "@chakra-ui/react";
import SectionCard from "../components/section-card";
import { LinkIcon } from "@chakra-ui/icons";
import Movie from "../components/movie";
import { FaChrome, FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <SectionCard>
        <Button
          leftIcon={<LinkIcon />}
          size="sx"
          as="a"
          href="https://play.google.com/store/apps/details?id=com.busstopprj.buslocationsystem&hl=bs&gl=US"
          colorScheme="grey"
          variant="ghost"
        >
          のっティバスどこ
        </Button>
        <Spacer boxSize="3px" />

        <Spacer boxSize="5px" />

        <Text>
          石川県野々市市内を走る市営バスの運行状況をリアルタイムで提供するアプリです。バスに搭載されたGPSとカメラを使って、バスが現在どこを走っているのか、またその時間帯の混雑状況を確認することができます。
          <br />
          このアプリは、学内プロジェクトであるBusStopプロジェクトの一環として制作されました。
          <br />
          このアプリはバージョン2で、Flutterで開発されました。バージョン1はKotlinで開発されました。現在、IOS版も後輩が中心となって開発中です。
        </Text>
        <Spacer boxSize="15px" />
        <Button
          leftIcon={<FaChrome />}
          size="sx"
          as="a"
          href="https://nottydoko-demo.sodeproject.com/"
          colorScheme="grey"
          variant="ghost"
        >
          のっティバスどこ
        </Button>
        <Spacer boxSize="15px" />
        <Button
          leftIcon={<FaChrome />}
          size="sx"
          as="a"
          href="http://sodeproject.com/busstop/"
          colorScheme="grey"
          variant="ghost"
        >
          BusStopプロジェクト
        </Button>
        <Spacer boxSize="15px" />
        <Image src="./image/notty.png" width="200px" alt="img"></Image>
      </SectionCard>

      <SectionCard>
        <Button
          leftIcon={<LinkIcon />}
          size="sx"
          as="a"
          href="https://play.google.com/store/apps/details?id=com.naoyuki.location_based_ar"
          colorScheme="grey"
          variant="ghost"
        >
          ARアプリ
        </Button>
        <Spacer boxSize="3px" />
        <Spacer boxSize="5px" />
        <Text>
          このアプリは卒業研究として制作しました。テーマは「WiFi LAN環境で実現可能な位置情報AR基盤の提案と実装」です。Raspberry
          Piで作成したサーバーにARオブジェクトを要求し、送られてきたARオブジェクトを描画するアプリです。
          <br />
          iRex2023に出展しました。
        </Text>
        <Spacer boxSize="15px" />
        <Button
          leftIcon={<FaChrome />}
          size="sx"
          as="a"
          href="https://minorunakazawa.github.io/i2lab/"
          colorScheme="grey"
          variant="ghost"
        >
          中沢研究室
        </Button>
        <Spacer boxSize="15px" />
        <Button
          leftIcon={<FaGithub />}
          size="sx"
          as="a"
          href="https://github.com/Naoyuki0920/Location_Based_AR_System_Flutter"
          colorScheme="grey"
          variant="ghost"
        >
          Source
        </Button>
        <Spacer boxSize="15px" />
        <Movie />
      </SectionCard>

      <SectionCard>
        <Center>
          <Text fontSize="xs" color="BlackAlpha 700">
            Based on{" "}
            <Link href="https://www.craftz.dog/">Takuya Matsuyama&apos;s</Link>{" "}
            design
          </Text>
        </Center>
        <Center>
          <Text fontSize="xs" color="BlackAlpha 700">
            © 2023 Naoyuki Masuda. All Rights Reserved.
          </Text>
        </Center>
      </SectionCard>
    </>
  );
}
