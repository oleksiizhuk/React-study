import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Text = ({ item }) => {
  // eslint-disable-next-line no-console
  console.log('render Text');
  const { name, age } = item;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

Text.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

export default memo(Text);
