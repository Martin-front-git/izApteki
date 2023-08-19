'use client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '.././Store/cartSlice';



export const store = configureStore({
  reducer : {
    cart: cartReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;