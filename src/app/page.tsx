'use client';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import ProductPage from './components/body/productPage/page';
import CatalogComponent from './components/header/catalog/page';
import MainPage from './Layouts/mainPage/page';

function MyApp() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/catalog' element={<CatalogComponent/>}/>
        <Route path={`/product/:productId`} element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default MyApp;
