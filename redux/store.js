import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './expenseSlice';
import commentReducer from './commentReducer'; 

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    comments: commentReducer, 
  },
});

export default store;