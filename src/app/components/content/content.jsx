import React from "react";
import { PortableText } from "@portabletext/react";
import cl from 'classnames';
import styles from './content.module.scss';
import ImageCustom from "../image-post/image-post";
import { clientConfig } from "@/app/lib/client";

const Content = ({
  className,
  body
}) => {
  return(
    <div className={cl(styles.content, className)}>
      <PortableText
        value={body}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
        components={{
          types: {
            image: ImageCustom,
          },
        }}
      />
  </div>
  )
}

export default Content;