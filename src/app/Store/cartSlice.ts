"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../app/data/products.json";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  products: any;
  cartItems: CartItem[];
}

const initialState: CartState = {
  products,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.productId === productId
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cartItems.push({ productId, quantity: 1 });
      }
    },
    plusToCart(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingCartItem) {
        existingCartItem.quantity = quantity;
      } else {
        state.cartItems.push({ productId, quantity });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.productId === productId
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export const { addToCart, plusToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
