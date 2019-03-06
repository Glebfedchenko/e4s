import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { index } from './reducers/index';

export const store = createStore(index, composeWithDevTools());
