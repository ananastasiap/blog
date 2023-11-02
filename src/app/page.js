import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title
} from "@/components"
import { Fragment } from "react";

const LOAD_MORE_STEP = 4;

export default function Home({ posts }) {
  return (
    <Fragment>
      <header>
        <Section>
          <Cover title="Anastasia<br/> Popova"/>
          <SocialNetworks />
          <BuyMeCoffee />
        </Section>
      </header>
      <main>
        <Section>
          <Title>New Post</Title>

        </Section>
      </main>
    </Fragment>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
};

async function loadData(start, end) {

}
