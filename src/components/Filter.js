import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../TodoList';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };
  //   const updateFilter = ({target: {value}}) => {
  //     setFilter(value);
  //   };
  return (
    <div>
      filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter;
