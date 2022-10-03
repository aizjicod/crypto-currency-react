import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import detailsReducer from './details/details';
import reducer from './home/home';

const store = configureStore({
  reducer: {
    cryptoData: reducer,
    idData: detailsReducer,
  },
}, applyMiddleware(thunk));

export default store;
