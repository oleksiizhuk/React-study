import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidationErrorText.module.scss';

const ValidationErrorText = ({ error }) => {
  return (
    <p className={styles.error}>{error}</p>
  );
};

ValidationErrorText.propTypes = {
  error: PropTypes.string.isRequired
};

export default ValidationErrorText;
