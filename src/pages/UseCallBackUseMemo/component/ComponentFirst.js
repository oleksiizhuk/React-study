import React from 'react';
import PropTypes from 'prop-types';

const ComponentFirst = ({ cars, onClick, num }) => {
  return (
    <div>
      {cars.map((item) => (
        <button onClick={() => onClick(num)} type="button" aria-labelledby="button-label" key={item}>
          <p>{item}</p>
        </button>
      ))}
      <p>{num}</p>
    </div>
  );
};

ComponentFirst.propTypes = {
  num: PropTypes.number.isRequired,
  cars: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ComponentFirst;
