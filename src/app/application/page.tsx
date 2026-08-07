"use client";

import { Box, Image, Text, Button } from "@chakra-ui/react";
import SectionCard from "../components/section-card";
import { FaLink, FaChrome, FaGithub } from "react-icons/fa";
import Movie from "../components/movie";
import Footer from "../components/footer";
import MotionWrapper from "../components/motionWrapper";

export default function Page() {
  return (
    <MotionWrapper>
      <SectionCard>
        <Button asChild size="sm" variant="ghost">
          <a
            href="https://play.google.com/store/apps/details?id=com.busstopprj.buslocationsystem&hl=ja&gl=JP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink />
            &nbsp;のっティバスどこ
          </a>
        </Button>
        <Box h="8px" />

        <Text>
          石川県野々市市内を走る市営バスの運行状況をリアルタイムで提供するアプリです。バスに搭載されたGPSとカメラを使って、バスが現在どこを走っているのか、またその時間帯の混雑状況を確認することができます。
          <br />
          このアプリは、学内プロジェクトであるBusStopプロジェクトの一環として制作しました。
          <br />
          このアプリはバージョン2で、Flutterで開発しました。バージョン1はKotlinで開発しています。現在、iOS版も後輩が中心となって開発中です。
        </Text>
        <Box h="15px" />
        <Button asChild size="sm" variant="ghost">
          <a
            href="https://nottydoko-demo.sodeproject.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaChrome />
            &nbsp;のっティバスどこ Webデモ
          </a>
        </Button>
        <Box h="15px" />
        <Button asChild size="sm" variant="ghost">
          <a
            href="http://sodeproject.com/busstop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaChrome />
            &nbsp;BusStopプロジェクト
          </a>
        </Button>
        <Box h="15px" />
        <Image
          src="/image/notty.png"
          width="200px"
          alt="のっティバスどこのアプリ画面"
        />
      </SectionCard>

      <SectionCard>
        <Button asChild size="sm" variant="ghost">
          <a
            href="https://play.google.com/store/apps/details?id=com.naoyuki.location_based_ar&hl=ja&gl=JP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink />
            &nbsp;ARアプリ
          </a>
        </Button>
        <Box h="8px" />
        <Text>
          このアプリは卒業研究として制作しました。
          <br />
          テーマは「Wi-Fi
          LAN環境で実現可能な位置情報AR基盤の提案と実装」です。Raspberry
          Piで作成したサーバーにARオブジェクトを要求し、送られてきたARオブジェクトを描画するアプリです。
          <br />
          iREX2023に出展しました。
        </Text>
        <Box h="15px" />
        <Button asChild size="sm" variant="ghost">
          <a
            href="https://github.com/Naoyuki0920/Location_Based_AR_System_Flutter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            &nbsp;Source
          </a>
        </Button>
        <Box h="15px" />
        <Movie />
      </SectionCard>

      <Footer />
    </MotionWrapper>
  );
}
