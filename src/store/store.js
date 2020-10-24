import redux, { createStore } from 'redux';
import globalStatReducer from '../reducers/globalStatReducer.js';

const store = createStore(globalStatReducer);

export default store;