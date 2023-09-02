'use client';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import cartReducer from '.././Store/cartSlice';

export const store = configureStore({
  reducer : {
    cart: cartReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;


