'use client'

import { Container } from "@chakra-ui/react"


export default function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <Container padding={5}>
      {children}
    </Container>
  )
}