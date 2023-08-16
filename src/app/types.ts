export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface RootState {
    products: Product[];
    cart: Product[];
  }
  