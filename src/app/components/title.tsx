'use client'

import { Stack, Text } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction={['column','row']}>
      <LinkIcon height="30px"></LinkIcon>
      <Text as={"b"} fontSize="xl">{children}</Text>
    </Stack>
  )
}