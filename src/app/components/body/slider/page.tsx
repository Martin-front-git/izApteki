// 'use client';
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import products from "../../data/db.json";
// import { useDispatch } from "react-redux";
// import { plusToCart } from "@/app/Store/cartSlice";

// const ProductsSlider: React.FC = () => {
//   const dispatch = useDispatch();
//   const [counters, setCounters] = useState<{ [key: number]: number }>({});

//   const handleAddToCart = (productId: number) => {
//     dispatch(plusToCart({ productId, quantity: counters[productId] || 1 }));
//   };

//   const handleIncrement = (productId: number) => {
//     setCounters((prevCounters) => ({
//       ...prevCounters,
//       [productId]: (prevCounters[productId] || 0) + 1,
//     }));
//   };

//   const handleDecrement = (productId: number) => {
//     if (counters[productId] > 0) {
//       setCounters((prevCounters) => ({
//         ...prevCounters,
//         [productId]: (prevCounters[productId] || 0) - 1,
//       }));
//     }
//   };

//   return (
//     <>
//       <div className="border-2">
//         <h2>Slider</h2>
//         {products.map((pr: any) => (
//           <div key={pr.id}>
//             <div>
//               <li key={pr.id}>
//                 <Link to={`/product/${pr.id}`}>
//                   {pr.name} - {pr.price}
//                 </Link>
//               </li>
//             </div>
//             <div>
//               <button onClick={() => handleDecrement(pr.id)}>-</button>
//               <span>{counters[pr.id] || 1}</span>
//               <button onClick={() => handleIncrement(pr.id)}>+</button>
//               <button onClick={() => handleAddToCart(pr.id)}>в корзину</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsSlider;
'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/Store/page';
import { setSlide } from '@/app/Store/sliderSlice';
import styles from '@/app/Styles/Body/slider.module.scss';
import Image from 'next/image';
import products from '@/app/data/db.json';

interface SliderProps {
  data: {
    id: number;
    name : string;
    price: number;
    image: string;
  }[];
}

const Slider: React.FC<SliderProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const slide = useSelector((state: RootState) => state.slider.slide);

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(products.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
    dispatch(setSlide(activeIndex));
  };

  const handleNextClick = () => {
    if (activeIndex === products.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
    dispatch(setSlide(activeIndex));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {products.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.slide} ${
              index === slide ? styles.active : ''
            }`}
          >
            
            <Image src={item.image} alt={item.name} width={500} height={500}/>
            <div className={styles.content}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={handlePrevClick}>
        Prev
      </button>
      <button className={styles.next} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Slider;
