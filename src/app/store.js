import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import propanReducer from '../features/propan/propanSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    propan: propanReducer,
  },
});
