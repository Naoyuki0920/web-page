'use client'

import { Flex, Text, Stack, Container } from '@chakra-ui/react'

export default function Timeline() {
  return (
    <Stack spacing="2px" direction={['column', 'row']}>
      <Container>
        <Text as="b">2020</Text>
      </Container>
      <Container>
        <Text>金沢工業大学入学</Text>
      </Container>
    </Stack>
  )
}