import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'ALL Show',
});

export const filteredTodoList = selector({
  key: 'filteredTodoList',
  get: ({ get }) => {
    const list = get(todoListState);
    const filtered = get(todoListFilterState);

    switch (filtered) {
      case 'Completed':
        return list.filter((item) => item.isComplete);
      case 'Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const countList = selector({
  key: 'countList',
  get: ({ get }) => {
    const filtered = get(filteredTodoList);

    return filtered.length;
  },
});
