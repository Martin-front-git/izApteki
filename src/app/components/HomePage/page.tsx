'use client';
import React from 'react';
import SearchList from '../search/page';
import Cart from '../cart/page';
import ProductsSlider from '../productPage/productsSlider';

const HomePageComponent = () => {
  return (
    <>
      
      <SearchList />
      <Cart />
      <ProductsSlider />
   </>
  );
};


export default HomePageComponent;
