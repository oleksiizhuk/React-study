import React from 'react';
import PropTypes from 'prop-types';
import styles from './style/LinkedListView.module.scss';

const LinkedListView = ({ list }) => {
  // console.log(list);
  return (
    <div className={styles.container}>
      <h1>LinkedList </h1>
      {list.map((item) => (
        <div className={styles.itemContainer}>{item}</div>
      ))}
    </div>
  );
};

LinkedListView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
};

LinkedListView.defaultProps = {
  list: []
};

export default LinkedListView;
