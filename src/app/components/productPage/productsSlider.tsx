import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/db.json";
import { useDispatch } from "react-redux";
import { plusToCart } from "@/app/Store/cartSlice";

const ProductsSlider: React.FC = () => {
  const dispatch = useDispatch();
  const [counters, setCounters] = useState<{ [key: number]: number }>({});

  const handleAddToCart = (productId: number) => {
    dispatch(plusToCart({ productId, quantity: counters[productId] || 1 }));
  };

  const handleIncrement = (productId: number) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: (prevCounters[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    if (counters[productId] > 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [productId]: (prevCounters[productId] || 0) - 1,
      }));
    }
  };

  return (
    <div className="border-2">
      <h2>Slider</h2>
      {products.map((pr: any) => (
        <div key={pr.id}>
          <div>
            <li key={pr.id}>
              <Link to={`/product/${pr.id}`}>
                {pr.name} - {pr.price}
              </Link>
            </li>
          </div>
          <div>
            <button onClick={() => handleDecrement(pr.id)}>-</button>
            <span>{counters[pr.id] || 1}</span>
            <button onClick={() => handleIncrement(pr.id)}>+</button>
            <button onClick={() => handleAddToCart(pr.id)}>в корзину</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSlider;
