import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  // eslint-disable-next-line no-console
  console.log('render Button');
  return (
    <button onClick={onClick} type="button" aria-labelledby="button-label">
      <p>button</p>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(Button);
