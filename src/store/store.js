import redux, { applyMiddleware, createStore } from 'redux';
import globalStatReducer from '../reducers/globalStatReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(globalStatReducer, composeWithDevTools());

export default store;