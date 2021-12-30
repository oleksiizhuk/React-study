import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Number = ({ number }) => {
  // eslint-disable-next-line no-console
  console.log('render number', number);
  return (
    <p>{number}</p>
  );
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
};

export default memo(Number);
