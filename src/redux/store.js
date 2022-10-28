import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataSlice from './slice/data';

const rootReducer = combineReducers({
  data: dataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
