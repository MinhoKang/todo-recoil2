import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoList, todoListState } from './TodoList';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter';
import Count from './components/Count';

function App() {
  const todoList = useRecoilValue(todoListState);
  const filtered = useRecoilValue(filteredTodoList);
  console.log('todoList', todoList);
  console.log('filtered', filtered);

  return (
    <div className="App">
      <Filter />
      <Count/>
      <TodoItemCreator />
      {filtered.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
