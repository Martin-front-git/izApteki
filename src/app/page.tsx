'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './Store/page';
import { addToCart, removeFromCart } from './Store/cartSlice';
import ProductList from './components/productList/page';
import Cart from './components/cart/page';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, cartItems } = useSelector((state: RootState) => state.cart);

  const handleAddToCart = (productId: number) => {
    dispatch(addToCart(productId));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h1>Интернет-магазин</h1>
      <ProductList
        products={products}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Cart cartItems={cartItems}/>
    </div>
  );
};

export default Home;
