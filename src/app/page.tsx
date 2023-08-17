'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/cart/page';
import SearchList from './components/search/page';
import ProductsSlider from './components/slider/page';

const Home: React.FC = () => {

  return (
    <>
      <SearchList/>
      <Cart/>
      <ProductsSlider/>
    </>
  );
};

export default Home;
