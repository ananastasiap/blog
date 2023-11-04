import React from "react";
import { format } from 'date-fns';
import { client } from "@/app/lib/client";

import { Article, Title, Content } from "@/app/components";

// import cl from 'classnames';
import styles from './slug.module.scss';

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Page({ params }) {
  const data = await getData(params.slug);
  const date = format(new Date(data.publishedDate), 'dd MMM yyyy');
  return (
    <Article backUrl="/" className={styles.post}>
      <Title className={styles.postTitle}>
        {data.title}
      </Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={data.body} />
    </Article>
  )
}