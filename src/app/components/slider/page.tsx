import React, { useState } from "react";
import products from "../../data/products.json";
import { useDispatch } from "react-redux";
import { plusToCart } from "@/app/Store/cartSlice";

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductsSlider: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId: number, quantity: number) => {
    dispatch(plusToCart({ productId, quantity }));
  };

  return (
    <div className="border-2">
      <h2>Slider</h2>
      {products.map((pr: Product) => (
        <div key={pr.id}>
          <li key={pr.id}>
            {pr.name} - {pr.price}
          </li>
          <div>
            <CounterAndCartButton
              productId={pr.id}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

interface CounterAndCartButtonProps {
  productId: number;
  handleAddToCart: (productId: number, quantity: number) => void;
}

const CounterAndCartButton: React.FC<CounterAndCartButtonProps> = ({
  productId,
  handleAddToCart,
}) => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => handleAddToCart(productId, count)}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductsSlider;
