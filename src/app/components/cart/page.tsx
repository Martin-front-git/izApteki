'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Store/cartSlice';

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h2>Корзина</h2>
      <p>Общее количество товаров: {totalQuantity}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            Товар #{item.productId} - Количество: {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.productId)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
