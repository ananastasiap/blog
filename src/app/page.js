import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title
} from "@/components"
// import { Fragment } from "react";

export default function Home() {
  return (
    <main>
      <Section>
        <Cover title="Anastasia<br/> Popova"/>
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </main>
  )
}
