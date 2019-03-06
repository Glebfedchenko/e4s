/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, search } from '../../redux/actions/index';
import Todo from './Todo/Todo';
import './todos.scss';

const Input = ({ todos }) => (
  <div className="todoList">
    {todos ? todos.map(t => <Todo key={t.id} todo={t} />) : null}
  </div>
);

Input.propTypes = {
  todos: PropTypes.array,
};

export default connect(
  state => ({
    todos: state.todo.todos,
    searchValue: state.todo.searchValue,
  }),
  { addTodo, search }
)(Input);
