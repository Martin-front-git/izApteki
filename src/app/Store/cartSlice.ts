// "use client";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import data from "../../../public/db.json";

// const products = data.homeInfo;

// interface CartItem {
//   productId: number;
//   quantity: number;
//   productName: string;
//   productPrice: number;
//   productImage : string;
// }


// interface CartState {
//   products: any;
//   cartItems: CartItem[];
// }

// const initialState: CartState = {
//   products,
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
// addToCart(state, action: PayloadAction<CartItem>) {
//   const { productId, quantity, productName, productPrice, productImage } = action.payload;
//   const existingCartItem = state.cartItems.find((item) => item.productId === productId);

//   if (existingCartItem) {
//     existingCartItem.quantity += quantity;
//   } else {
//     state.cartItems.push({
//       productId,
//       quantity,
//       productName,
//       productPrice,
//       productImage,
//     });
//   }
// },

//     plusToCart(
//       state,
//       action: PayloadAction<{ productId: number; quantity: number }>
//     ) {
//       const { productId, quantity } = action.payload;
//       const productName = initialState.products.name;
//       const productPrice = initialState.products.price;
//       const productImage = initialState.products.image;
//       const existingCartItem = state.cartItems.find(
//         (item) => item.productId === productId
//       );

//       if (existingCartItem) {
//         existingCartItem.quantity = quantity;
//       } else {
//         state.cartItems.push({ productId, quantity,productName,productPrice,productImage});
//       }
//     },
//     removeFromCart(state, action: PayloadAction<number>) {
//       const productId = action.payload;
//       const index = state.cartItems.findIndex(
//         (item) => item.productId === productId
//       );
//       if (index !== -1) {
//         state.cartItems.splice(index, 1);
//       }
//     },
//   },
// });

// export const { addToCart, plusToCart, removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;
// Ваш cartSlice.ts

"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../../public/db.json";

const products = data.homeInfo;

interface CartItem {
  productId: number;
  quantity: number;
  productName: string;
  productPrice: number;
  productImage : string;
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
addToCart(state, action: PayloadAction<CartItem>) {
  const { productId, quantity, productName, productPrice, productImage } = action.payload;
  const existingCartItem = state.cartItems.find((item) => item.productId === productId);

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    state.cartItems.push({
      productId,
      quantity,
      productName,
      productPrice,
      productImage,
    });
  }
},

plusToCart(state, action: PayloadAction<CartItem>) {
  const { productId, quantity, productName, productPrice, productImage } = action.payload;
  const existingCartItem = state.cartItems.find((item) => item.productId === productId);

  if (existingCartItem) {
    existingCartItem.quantity = quantity;
  } else {
    state.cartItems.push({ productId, quantity, productName, productPrice, productImage });
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