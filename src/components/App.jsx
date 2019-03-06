import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusSquare,
  faTrash,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import { store } from '../redux/store';
import InputBox from './InputBox/InputBox';
import TodoList from './TodoList/TodoList';

library.add(faPlusSquare, faTrash, faCheckSquare);

export const App = () => (
  <Provider store={store}>
    <>
      <InputBox />
      <TodoList />
    </>
  </Provider>
);
