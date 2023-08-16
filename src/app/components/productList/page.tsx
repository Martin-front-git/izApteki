'use client';
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  productId: number;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (productId: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Список товаров</h2>
      <input
        type="text"
        placeholder="Поиск товаров..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} руб.
            <button onClick={() => onAddToCart(product.id)}>Добавить в корзину</button>
            {cartItems.find((item) => item.productId === product.id) && (
              <span>Товар в корзине</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
