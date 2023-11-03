import React from "react";

import cl from 'classnames';
import styles from './buy-me-coffee.module.scss';

import ScreenEgg from "../screen-egg/screen-egg";

const BuyMeCoffee = ({
  className,
}) => {
  return(
    <ScreenEgg type="right">
    <div className={cl(className, styles.buyCoffee)}>
      <a
        href="https://buy.stripe.com/test_8wM8y1dOV1Uj0fK000"
        target="_blank"
        className={styles.buyCoffeeButton}
        rel="noreferrer"
      >
        Buy this writer a coffe :)
      </a>
    </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee;