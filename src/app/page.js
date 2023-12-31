"use client";

import { useState, useEffect, Fragment } from "react";

import {
  Section,
  Cover,
  SocialNetworks,
  BuyMeCoffee,
  Title,
  PostGrid,
  Post,
  Button
} from "./components";

import { loadData } from "./api/posts";
import { client } from "./lib/client";

const LOAD_MORE_STEP = 4;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { posts, total } = await loadData(0, LOAD_MORE_STEP);
      setPosts(posts);
      setTotal(total);
    }

    fetchData();
  }, []);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const { posts } = await loadData(loadedAmount, loadedAmount + LOAD_MORE_STEP);

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts((prevPosts) => [...prevPosts, ...posts]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <header>
        <Section>
          <Cover title="Arthur<br/> Morgan"/>
          <SocialNetworks />
          <BuyMeCoffee />
        </Section>
      </header>
      <main>
        <Section>
          <Title>Adventures</Title>
          <PostGrid>
            {posts.map((post) => (
              <Post
                key={post.slug.current}
                {...post}
              />
            ))}
          </PostGrid>
          {isLoadButton && (
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Button
                onClick={getMorePosts}
                disabled={loading}
              >
                Load more posts...
              </Button>
            </div>
          )}
        </Section>
      </main>
    </Fragment>
  )
}