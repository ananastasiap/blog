"use client";

import { useState, useEffect, Fragment } from "react";

import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title,
  PostGrid,
  Post
} from "@/components";

import { loadData } from "@/api/posts";

const LOAD_MORE_STEP = 4;

export default async function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { initialPosts, total } = await loadData(0, LOAD_MORE_STEP);
      setPosts(initialPosts);
    }

    fetchData();
  }, []);

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
          <PostGrid>
            {posts.map((post) => (
              <Post
                key={post.slug.current}
                {...post}
              />
            ))}
          </PostGrid>
        </Section>
      </main>
    </Fragment>
  )
}