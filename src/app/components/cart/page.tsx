import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, plusToCart } from "../../Store/cartSlice";
import { RootState } from "@/app/Store/page";

interface CartItem {
  productId: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    dispatch(plusToCart({ productId, quantity: newQuantity }));
  };

  const isOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button onClick={isOpen}>Cart ({totalQuantity})</button>
      {isModalOpen && (
        <div className="border-red-2">
          <h2>Корзина</h2>
          <p>
            Общее количество товаров: {totalQuantity}
          </p>
          <ul>
            {cartItems.map((item: CartItem) => (
              <li key={item.productId}>
                Товар #{item.productId} - Количество: {item.quantity}
                <div>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.productId, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.productId, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button onClick={() => handleRemoveFromCart(item.productId)}>
                  Удалить
                </button>
                <button>Купить</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cart;
