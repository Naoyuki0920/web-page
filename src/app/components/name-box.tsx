'use client'

import { Text, Flex, Stack, Spacer, Image } from '@chakra-ui/react'

export default function NameBox() {
  return (
    <Flex flex={1} justify="space-between" maxW="5xl" mx="auto" padding={5}>
      <Stack
        direction={['row', 'column']}
        align={['center', 'stretch']}>
        <Text as="b" fontSize="4xl">Naoyuki Masuda</Text>
        <Text>Android App Creator & Network Engineer</Text>
      </Stack>
      <Spacer />
      <Image borderRadius='full'
        boxSize='100px'
        src='./profile.jpg'
        alt='Dan Abramov'></Image>
    </Flex>
  )
}