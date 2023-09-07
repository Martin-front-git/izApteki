import React from "react";
import Image from "next/image";
import style from "@/app/Styles/Body/Partners.module.scss";
import { useTodos } from "@/app/hooks/useTodos/page";


const Partners = () => {
//!getting data from own hook
const { isFetching, data } = useTodos();
 
  return (
    <>
      <div className={style.partnersBlock}>
        <h1 className={style.caption}>Наши партнёры</h1>
        <div className={style.imageDiv}>
          {isFetching ? (<p>Loading...</p>) : (data.partners.map((item: any) => (
            <>
             <div>
             <Image
                className={style.partnersImage}
                alt={item.name}
                src={item.image}
                width={1000}
                height={370}
              />
             </div>
            </>
          )))}
        </div>
      </div>
    </>
  );
};

export default Partners;
