/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTodo, editTodo } from '../../../redux/actions/index';

const Todo = ({ todo, deleteTodo, editTodo }) => (
  <div className="todo">
    <FontAwesomeIcon
      icon="check-square"
      className={todo.isComplete ? 'fa-4x complete' : 'fa-4x incomplete'}
      onClick={() => editTodo(todo)}
    />
    <h1 className={todo.isComplete ? `linethrough` : `noline`}>{todo.name}</h1>
    <FontAwesomeIcon
      icon="trash"
      className={todo.isComplete ? 'fa-4x trash' : 'fa-4x delete'}
      onClick={() => deleteTodo(todo)}
    />
  </div>
);
Todo.propTypes = {
  todo: PropTypes.object,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
export default connect(
  null,
  { deleteTodo, editTodo }
)(Todo);
