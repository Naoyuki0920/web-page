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
        <Stack direction="row">
          <Spacer boxSize="5px" />
          <Box>
            <Text>
              This application provides real-time information on the operation
              status of citizen buses running in Nonoichi City, Ishikawa
              Prefecture. Using the GPS and camera mounted inside the bus, you
              can check where the bus is running and how crowded it is at that
              time.
              <br />
              This app was created as part of the BusStop Project, a project
              within the university.
              <br />
              This app is version 2 and was developed using Flutter. Version 1
              was developed using Kotlin. Currently, our junior students are
              taking the lead in developing it for IOS as well.
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
            <br />
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
          </Box>

          <Image
            src="./image/notty.png"
            borderRadius="10px"
            width="200px"
          ></Image>
        </Stack>
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
        <Stack direction="row">
          <Spacer boxSize="5px" />
          <Box>
            <Text>
              This application was created as a graduation project. The theme is
              "Proposal and implementation of a location-based AR infrastructure
              feasible in a WiFi LAN environment". This is an app that requests
              AR objects from a server created with Raspberry Pi and draws the
              sent AR objects.
              <br />
              It was exhibited at iRex2023.
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
            <br />
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
          </Box>
          <Movie />
        </Stack>
      </SectionCard>

      <SectionCard>
        <Center>
          <Text fontSize="xs" color="BlackAlpha 700">
            Based on{" "}
            <Link href="https://www.craftz.dog/">Takuya Matsuyama's</Link>{" "}
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
