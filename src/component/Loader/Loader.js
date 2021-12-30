import React from 'react';
import loader from '../../assets/images/loader.svg';
import styles from '../../scss/elements/Loader.module.scss';

const Loader = () => {
  return (
    <div>
      <img
        src={loader}
        className={styles.appLoader}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
