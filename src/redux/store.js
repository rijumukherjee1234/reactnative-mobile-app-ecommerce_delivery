// store.js
import { createStore } from 'redux';
import checkLogin from './reducer';

const store = createStore(checkLogin);

export default store;
