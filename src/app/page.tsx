'use client';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import HomePageComponent from './components/HomePage/page';
import ProductPage from './components/productPage/page';

function MyApp() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path={`/product/:productId`} element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default MyApp;
