import React from 'react';
import styles from './loading-page.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingPage;