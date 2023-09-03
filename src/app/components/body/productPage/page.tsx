import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Store/cartSlice";
import data from "../../../../../public/db.json";
import HomePageLayout from "../../../Layouts/HeaderLayout/page";
import style from "@/app/Styles/Body/ProductsPage.module.scss";
import Image from "next/image";
import InfoText from "../infoText/page";
import Slider from "../slider/page";
import Head from "next/head";

const products = data.homeInfo

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductPage = ({title}:{title:string}) => {
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

  //! Head title
  useEffect(()=> {
    if(title){
        document.title = title;
    }
  }, [title]);

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
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="интернет магазин лекарственных продуктов и косметики, страница продуктов " />
        <meta name="keywords" content="магазин,лекарственные продуктиб косметика" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Интернет аптека" />
        <meta property="og:description" content="Интернет аптека" />
        <meta property="og:image" content="http//.." />
        <meta property="og:url" content="http//.." />
      </Head>
      <div className={style.productBlock}>
        <h1 className={style.productName}>{product.name}</h1>
        <div className={style.doubleBlock}>
          <div className={style.imageBlock}>
            <Image
              className={style.image}
              src={product.image}
              alt={product.name}
              width={1200}
              height={1200}
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
      <InfoText/>
      <Slider/>
      <Slider/>
    </HomePageLayout>
  );
};

export default ProductPage;
