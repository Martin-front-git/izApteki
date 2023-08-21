'use client';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import ProductPage from './components/productPage/page';
import { ErrorComponent } from './components/error/page';
import MainPage from './Layouts/MainLayout/mainPage/page';
import CatalogComponent from './components/catalog/page';

function MyApp() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/components/catalog' element={<CatalogComponent/>}/>
        <Route path={`/product/:productId`} element={<ProductPage/>}/>
        <Route path={`/*`} element={<ErrorComponent/>}/>
      </Routes>
    </>
  );
}

export default MyApp;
