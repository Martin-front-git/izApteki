'use client';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { plusToCart } from "@/app/Store/cartSlice";
import style from "@/app/Styles/Body/slider.module.scss";
import Image from "next/image";
import basket from '../../../../../public/images/basket.png';
import left from '../../../../../public/images/left.png'
import right from '../../../../../public/images/right.png'
import { useTodos } from "@/app/hooks/useTodos/page";

interface IProdList {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Slider: React.FC = () => {
  const dispatch = useDispatch();
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const [sliderOffset, setSliderOffset] = useState(0);
  const sliderBlockRef = useRef<HTMLDivElement | null>(null);
  //!getting data from own hook
  const { isFetching, data } = useTodos();

  const handleAddToCart = (productId: number,productPrice: number, productName: string, productImage: string) => {
    dispatch(plusToCart({ productId, productName,productPrice, productImage, quantity: counters[productId] || 1 }));
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

 
  useEffect(() => {
    if (sliderBlockRef.current && data) {
      const sliderBlockWidth = sliderBlockRef.current.clientWidth;
      const visibleItems = Math.floor(sliderBlockWidth / 125);
      const maxSliderOffset = -(data.length - visibleItems) * 125;
  
      if (sliderOffset > 0) {
        setSliderOffset(0);
      } else if (sliderOffset < maxSliderOffset) {
        setSliderOffset(maxSliderOffset);
      }
    }
  }, [sliderOffset, data]);

  return (
    <div className={style.sliderWrapper}>
      <h1 className={style.caption}>Товары дня</h1>
      <div className={style.actualList}>
        <p>Актуальные</p>
        <p>От простуды и гриппа</p>
        <p>Аптечка</p>
        <p>Витамины</p>
        <p>Здоровое питание</p>
      </div>
      <div className={style.sliderBlock} ref={sliderBlockRef} style={{ transform: `translateX(${sliderOffset}px)` }}>
        {isFetching ? (<p>Loading...</p>) : (data.homeInfo.map((item: IProdList) => (
          <div key={item.id} className={style.sliderItem}>
            <div className={style.infoDiv}>
               <span key={item.id} className='flex justify-between'>
                 <Link to={`/product/${item.id}`}>
                    <div>
                      <Image src={item.image} alt={item.name} width={1200} height={1200} />
                    </div>
                    <div>
                      <p>{item.name} </p>
                      <p>от{item.price}Р.</p>
                    </div>
                 </Link>
               </span>
             </div>
             <div className={style.countButtonDiv}>
               <div className="flex justify-between items-center w-[75px]">
                  <button className={style.btnLeft} onClick={() => handleDecrement(item.id)}>-</button>
                  <span className={style.count}>{counters[item.id] || 1}</span>
                  <button className={style.btnRight} onClick={() => handleIncrement(item.id)}>+</button>
               </div>
               <div>
                  <button className={style.byBtn} onClick={() => handleAddToCart(item.id, item.price, item.name, item.image)}><Image src={basket} alt='basket'/></button>
               </div>
             </div>
          </div>
        )))}
        
      </div>
      <div className={style.navButtonDiv}>
        <button onClick={() => setSliderOffset(sliderOffset + 125)} className={style.slideButtonLeft}>
          <Image src={left} alt="left" width={512} height={512}/>
        </button>
        <button onClick={() => setSliderOffset(sliderOffset - 125)} className={style.slideButtonRight}>
          <Image src={right} alt="right" width={512} height={512}/>
        </button>
      </div>

    </div>
  );
};

export default Slider;