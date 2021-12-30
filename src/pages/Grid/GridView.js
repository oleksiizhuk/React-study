import React from 'react';
import styles from './Grid.module.scss';

const GridView = () => {
  // function test(a, b) {
  //   // eslint-disable-next-line prefer-rest-params
  //   console.log(arguments);
  //   console.log(this, a, b);
  // }
  // const newFn = test.bind({ name: 'Oleksii' }, '1');
  // newFn('2');
  // test.apply({ name: 'Oleksii' }, [1, 2]);
  // test.call({ name: 'Oleksii' }, 1, 2);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.item}>Grid</div>
        <div className={styles.item}>Grid</div>
        <div className={styles.item}>Grid</div>
        <div className={styles.item}>Grid</div>
        <div className={styles.item}>Grid</div>
        <div className={styles.item}>Grid</div>
      </div>
    </div>
  );
};

export default GridView;
