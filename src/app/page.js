"use client";

import { useState, useEffect, Fragment } from "react";
import Head from "next/head";

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
    setLoading(true)

    try {
      // const params = new URLSearchParams();
      // params.append('start', loadedAmount);
      // params.append('end', loadedAmount + LOAD_MORE_STEP);
      // const response = await fetch(`/api/posts?${params.toString()}`);
      const response = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`);
      const data = await response.json();

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

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