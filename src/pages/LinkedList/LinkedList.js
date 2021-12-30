import React from 'react';
import LinkedListView from './LinkedListView';
import linkedList from '../../utils/linkedList';

const LinkedList = () => {
  // eslint-disable-next-line no-console
  linkedList.addToTheEnd('addToTheEnd 1');
  linkedList.addToTheEnd(2);
  linkedList.addToTheEnd(3);

  linkedList.insertInPosition(2, 'insertInPosition 1');
  linkedList.getIndexByValue(3);

  linkedList.print();
  const list = linkedList.getValue();
  // console.log(list);
  // console.log(list);
  return (
    <LinkedListView
      linkedList={linkedList}
      list={list}
    />
  );
};

export default LinkedList;
