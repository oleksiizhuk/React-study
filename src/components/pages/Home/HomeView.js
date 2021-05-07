import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../elements/Button/Button';
import Loader from '../../elements/Loader/Loader';
import styles from '../../../scss/pages/Home/Home.module.scss';

const HomeView = ({
  joke, getJoke, title, buttonTitle, isLoadingJoke
}) => {
  return (
    <div>
      <p className={styles.appIntro}>
        {title}
      </p>
      {isLoadingJoke ? <Loader /> : <p>{joke}</p> }
      <Button
        title={buttonTitle}
        buttonClass={styles.updateJoke}
        handleClick={getJoke}
      />
    </div>
  );
};

HomeView.propTypes = {
  isLoadingJoke: PropTypes.bool.isRequired,
  joke: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  getJoke: PropTypes.func.isRequired,
};
export default HomeView;
