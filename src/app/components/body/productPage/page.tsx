import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Store/cartSlice";
import products from "../../../data/db.json";
import HomePageLayout from "../../../Layouts/HeaderLayout/page";
import style from "@/app/Styles/Body/ProductsPage.module.scss";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === Number(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        productId: product.id,
        quantity,
        productName: product.name,
        productPrice: product.price,
        productImage: product.image,
      };
      dispatch(addToCart(cartItem));
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <HomePageLayout>
      <div className={style.productBlock}>
        <h1 className={style.productName}>{product.name}</h1>
        <div className={style.doubleBlock}>
          <div className={style.imageBlock}>
            <Image
              className={style.image}
              src={product.image}
              alt={product.name}
              width={100}
              height={50}
            />
          </div>
          <div className={style.byBlock}>
            <div className={style.counterBlock}>
              <div className={style.infoDiv}>
                <div className='w-[50%] max-sm:hidden max-sm:w-[80%]' >
                  <p>Действующее вещество: </p>
                  <p>Производитель:</p>
                  <p>Дозировка:</p>
                  <p>Артикул:</p>
                </div>
                <div className='w-[50%] max-sm:w-[80%]'>
                  <p>Ибупрофен</p>
                  <p>{product.name}</p>
                  <p>200 мг.</p>
                  <p>Номер артикула</p>
                </div>
              </div>
              <div className={style.byBtnBlock}>
                <p className={style.price}>от.{product.price}Р.</p>
                <div className={style.byBtnDiv}>
                  <div className='flex'>
                    <button className={style.minusBtn} onClick={handleDecrement}>
                      -
                    </button>
                    <span className={style.count}>{quantity}</span>
                    <button className={style.plusBtn} onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                  <div>
                    <button className={style.byButton} onClick={handleAddToCart}>
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default ProductPage;
