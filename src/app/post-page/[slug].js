import React from "react";

// import { client } from "../lib/client";

// import cl from 'classnames';
// import stlyes from './styles.module.scss';

import { Article } from "../components";

const Post = ({ post}) => {
  return (
    <Article>
      Article
    </Article>
  )
}

export default Post;

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