import React from "react";

import { client } from "../lib/client";

import cl from 'classnames';
import stlyes from './slug.module.scss';

const { Article } = require("@/components")

const Post = ({ post}) => {
  return (
    <Article>
      Article
    </Article>
  )
}

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
      slug {
          current
      }
  }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
      params: {
          slug: post.slug.current
      }
  }));

  return {
      paths,
      fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { slug }}) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
      props: {
          post
      }
  }
}