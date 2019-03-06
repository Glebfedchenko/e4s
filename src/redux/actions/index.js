export const ADD_TODO = `ADD_TODO`;
export const DELETE_TODO = `DELETE_TODO`;
export const EDIT_TODO = `EDIT_TODO`;
export const SEARCH = `SEARCH`;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = text => ({
  type: DELETE_TODO,
  payload: text,
});

export const editTodo = text => ({
  type: EDIT_TODO,
  payload: text,
});

export const search = value => ({ type: SEARCH, payload: value });
