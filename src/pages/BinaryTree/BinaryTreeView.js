import React from 'react';
import styles from './BinaryTreeView.module.scss';
import BinarySearchTree from '../../utils/binaryTree';

const BinaryTreeView = () => {
  const BinaryTree = new BinarySearchTree();

  BinaryTree.insert(4);
  BinaryTree.insert(5);
  BinaryTree.insert(8);
  BinaryTree.insert(13);
  // BinaryTree.insert(0);
  BinaryTree.insert(1);
  // BinaryTree.insert(2);
  // BinaryTree.insert(3);
  BinaryTree.alertData();
  // const res = BinaryTree.findMinNode();
  // console.log('res', res);
  // const result = BinaryTree.getTree();

  // const parseError = (parseData, errors) => {
  //   return parseData.reduce((newErrors, item) => {
  //     if (typeof item === 'object') {
  //       return parseError(Object.values(item), newErrors);
  //     }
  //     return typeof item === 'string' ? [...newErrors, item] : [...newErrors];
  //   }, errors);
  // };

  // const func = (node) => {
  //   console.log(node);
  //   if (node.data === null) {
  //
  //   } else {
  //     console.log(node.data);
  //   }
  // };

  // func(result);

  return (
    <div className={styles.container}>
      <p>BinaryTree</p>
    </div>
  );
};

export default BinaryTreeView;
