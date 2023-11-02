import React from "react";

import cl from 'classnames';
import styles from './post.module.scss';

const Post = ({
  className,
  image,
  title,
  description,
  slug
}) => {
  return(
    <div>{title}</div>
  )
}

export default Post;