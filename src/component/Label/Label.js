import React from 'react';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={styles.label}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;
