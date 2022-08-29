import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './home/home';

const store = configureStore({
  reducer: {
    reducer,
  },
}, applyMiddleware(thunk));

export default store;
