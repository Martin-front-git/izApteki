'use client';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isRegistered: boolean;
  isAuthModalOpen: boolean;
  isSuccessModalOpen: boolean; // Добавьте это свойство
}

const initialState: AuthState = {
  isRegistered: false,
  isAuthModalOpen: false,
  isSuccessModalOpen: false, // Установите значение по умолчанию
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false;
    },
    setRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
    openSuccessModal: (state) => {
      state.isSuccessModalOpen = true;
    },
    closeSuccessModal: (state) => {
      state.isSuccessModalOpen = false;
    },
  },
});

export const { openAuthModal, closeAuthModal, setRegistered, openSuccessModal, closeSuccessModal } = authSlice.actions;

export default authSlice.reducer;
