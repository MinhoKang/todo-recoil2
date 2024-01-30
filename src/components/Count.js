import React from 'react';
import { useRecoilValue } from 'recoil';
import { countList } from '../TodoList';

const Count = () => {
  const count = useRecoilValue(countList);
  console.log(count);
  return <div>{count}</div>;
};

export default Count;
