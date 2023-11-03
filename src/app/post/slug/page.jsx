import React from "react";

import { client } from "@/app/lib/client";

import { Article } from "@/app/components";

// import cl from 'classnames';
// import stlyes from './styles.module.scss';

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Post({ post }) {
  const data = await getData(post.slug);

  return (
    <Article>
      {data}
    </Article>
  )
}

// export async function getStaticPath() {
//   const query = `*[type == "post"] {
//     slug {
//       current
//     }
//   }`;

//   const posts = await client.fetch(query)
// }

// export async function getStaticProps() {
// }