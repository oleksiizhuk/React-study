import React from 'react';
import PropTypes from 'prop-types';
import ValidationErrorText from '../ValidationErrorText/ValidationErrorText';
import styles from './input.module.scss';
import Label from '../Label/Label';

const Input = ({
  value,
  onChange,
  onBlur,
  errors,
  labelHtmlFor,
  labelText,
  placeholder,
  type,
  name,
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerInner}>
        {labelHtmlFor && labelText && <Label htmlFor={labelHtmlFor} text={labelText} />}
        <input
          // id="userName"
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors && <ValidationErrorText error={errors} />}
      </div>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  placeholder: PropTypes.string,
  labelHtmlFor: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  onBlur: undefined,
  errors: '',
  placeholder: '',
  labelHtmlFor: '',
  labelText: '',
  type: 'text',
};

export default Input;
