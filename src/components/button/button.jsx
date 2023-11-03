import React from "react";

import cl from 'classnames';
import styles from './button.module.scss';

const Button = ({
  className,
  children,
  onClick,
  disabled
}) => {
  return(
    <button
      className={cl(className, styles.button)}
      onClick={onClick}
      disabled={disabled}
    >
      { children }
    </button>
  )
}

export default Button;