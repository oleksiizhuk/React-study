import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
  title, styleButton, onClick, disabled
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${styleButton} ${disabled && styles.disabledButton}`}
      data-testid="button"
      disabled={disabled}
    >
      { title }
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  styleButton: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  disabled: false,
  styleButton: ''
};

export default Button;
