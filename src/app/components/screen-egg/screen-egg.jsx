import React from "react";

import cl from 'classnames';
import styles from './screen-egg.module.scss';

const ScreenEgg = ({
  className,
  type,
  children
}) => {
  return(
    <div className={cl(
      className,
      styles.screenEgg,
      type === "right" ?
                styles.screenEggRight :
                styles.screenEggLeft
      )}>
      { children }
    </div>
  )
}

export default ScreenEgg;