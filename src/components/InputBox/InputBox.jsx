/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RenderField, { required } from './RenderField';
import { search, addTodo } from '../../redux/actions';
import './inputBox.scss';

const InputBox = ({ searchValue, search, addTodo, handleSubmit }) => {
  const onSubmit = ({ todo }) => {
    addTodo(todo);
  };
  return (
    <>
      <h1>TODO ITEMS</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <div className="input__inner">
            <Field
              name="todo"
              component={RenderField}
              validate={required}
              value={searchValue}
              onChange={e => search(e.target.value)}
            />
          </div>
          <button className="input__button" type="submit">
            <FontAwesomeIcon className="fa-5x" icon="plus-square" />
          </button>
        </div>
      </form>
    </>
  );
};

InputBox.propTypes = {
  search: PropTypes.func,
  searchValue: PropTypes.string,
  addTodo: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default compose(
  reduxForm({ form: 'Input' }),
  connect(
    state => ({
      searchValue: state.todo.searchValue,
    }),
    { search, addTodo }
  )
)(InputBox);
