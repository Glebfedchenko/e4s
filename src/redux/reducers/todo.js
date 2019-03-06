/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
import * as actions from '../actions/index';

const initialState = {
  todos: [],
  displayResults: [],
  searchValue: '',
};
let todoId = 0;
export const todo = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_TODO:
      todoId += 1;
      const todo = { id: todoId, isComplete: false, name: payload };
      return {
        ...state,
        todos: state.todos.concat(todo),
        displayResults: state.displayResults.concat(todo),
      };
    case actions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.name !== payload.name),
        displayResults: state.todos.filter(t => t.name !== payload.name),
      };
    case actions.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(td =>
          td.id === payload.id ? { ...td, isComplete: !td.isComplete } : td
        ),
        displayResults: state.displayResults.map(td =>
          td.id === payload.id ? { ...td, isComplete: true } : td
        ),
      };
    case actions.SEARCH:
      return {
        ...state,
        searchValue: payload,
        todos: state.displayResults.filter(t => t.name.includes(payload)),
      };
    default:
      return state;
  }
};
