"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusToCart } from "@/app/Store/cartSlice";
import { AppDispatch, RootState } from "@/app/Store/page";

const SearchList: React.FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundProduct, setFoundProduct] = useState<any | null>(null);
  const [count, setCount] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const product = products.find((p: any) => p.name.toLowerCase() === term);
    setFoundProduct(product);
  };

  const handleAddToCart = () => {
    if (foundProduct) {
      dispatch(plusToCart({ productId: foundProduct.id, quantity: count }));
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {foundProduct && (
        <div className="flex">
          <p>
            {foundProduct.name} - {foundProduct.price} руб.
            <div>
              <button onClick={() => setCount(count - 1)}>-</button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={handleAddToCart}>Добавить в корзину</button>
            </div>
          </p>
        </div>
      )}
    </>
  );
};

export default SearchList;
