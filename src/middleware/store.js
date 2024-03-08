
import { configureStore } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk';
import { reducer } from '../redux/reducer';
import { middlewareThunk } from './middlewareThunk';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareThunk),
});

export default store;