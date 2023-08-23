"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../app/data/db.json";

interface CartItem {
  productId: number;
  quantity: number;
  productName: string;
  productPrice: number;
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
  const selectedProduct = state.products.find((product: any) => product.product_id === productId);

  if (selectedProduct) {
    const existingCartItem = state.cartItems.find((item) => item.productId === productId);

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      state.cartItems.push({
        productId,
        quantity: 1,
        productName: selectedProduct.product_name,
        productPrice: selectedProduct.product_price
      });
    }
  }
},

    plusToCart(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const productName = initialState.products.name;
      const productPrice = initialState.products.price;
      const existingCartItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingCartItem) {
        existingCartItem.quantity = quantity;
      } else {
        state.cartItems.push({ productId, quantity,productName,productPrice});
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
