import React from "react";
import Link from "next/link";

import cl from 'classnames';
import styles from './article.module.scss';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Article = ({
  className,
  children,
  backUrl
}) => {
  return(
    <article className={cl(className, styles.article)}>
      <Link href={backUrl} className={styles.articleBack}>
        <AiOutlineArrowLeft />
      </Link>
      <div className={styles.articleContent}>
      { children }
      </div>
    </article>
  )
}

export default Article;