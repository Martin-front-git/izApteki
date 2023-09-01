'use client';
import React from 'react';
import ProductPage from './components/body/productPage/page';
import CatalogComponent from './components/header/catalog/page';
import MainPage from './Layouts/mainPage/page';
import {Routes, Route} from 'react-router-dom'

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
