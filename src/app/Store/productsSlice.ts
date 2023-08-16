'use client';
import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products.json'; // Путь к вашему JSON-файлу

const initialState = productsData;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
