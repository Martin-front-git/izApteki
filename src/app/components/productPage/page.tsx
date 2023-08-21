'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/db.json';
import HomePageLayout from '../../Layouts/HeaderLayout/page';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // Обратите внимание на указание типа параметра

  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === Number(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <HomePageLayout>
      <h2>Product Page</h2>
      <p>Product ID: {productId}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: {product.price}</p>
    </HomePageLayout>
  );
};

export default ProductPage;
