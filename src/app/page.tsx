'use client'

import NameBox from "./components/name-box"
import Title from "./components/title"
import SectionCard from "./components/section-card"
import Description from "./components/description"
import Timeline from "./components/Timeline"

export default function Home() {

  return (
    <div>
      <NameBox />
      <SectionCard>
      <Title>About</Title>
      <Description />
      </SectionCard>
      <SectionCard>
      <Title>Bio</Title>
      <Timeline />
      </SectionCard>
    </div>
  )
}
