import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { todo } from './todo';

export const index = combineReducers({ todo, form: formReducer });
