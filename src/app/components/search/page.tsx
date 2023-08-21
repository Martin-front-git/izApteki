'use client';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusToCart } from "@/app/Store/cartSlice";
import { Link } from "react-router-dom";
import { RootState } from "@/app/Store/page";
import style from '@/app/Styles/Search.module.scss';

interface Product {
  id: number;
  name: string;
  price: number;
}

const SearchList: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.cart);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [foundProducts, setFoundProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value; 
    setSearchTerm(term);

    if (term === "") {
      setFoundProducts([]);
      setSelectedProduct(null);
    } else {
      const matchingProducts = products.filter(
        (p: Product) =>
          p.name.toLowerCase().startsWith(term.toLowerCase()) 
      );
      setFoundProducts(matchingProducts);
      setSelectedProduct(null);
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(plusToCart({ productId: selectedProduct.id, quantity: count }));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleInputChange}
        className={style.searchInput}
      />
      {foundProducts.length > 0 && (
        <ul className="product-suggestions">
          {foundProducts.map((product) => (
            <li key={product.id}>
              <button
                onClick={() => setSelectedProduct(product)}
                className={
                  selectedProduct && selectedProduct.id === product.id
                    ? "selected"
                    : ""
                }
              >
                {product.name} - {product.price}
              </button>
            </li>
          ))}
        </ul>
      )}
      {selectedProduct && (
        <div>
          <Link to={`/product/${selectedProduct.id}`}>
            <span>{selectedProduct.name}</span>
            <span>{selectedProduct.price}</span>
          </Link>
          <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchList;

