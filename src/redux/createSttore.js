import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './home/home';

const store = configureStore({
  reducer: {
    cryptoData: reducer,
  },
}, applyMiddleware(thunk));

export default store;
