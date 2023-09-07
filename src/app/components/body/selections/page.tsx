import React from "react";
import style from "@/app/Styles/Body/Selections.module.scss";
import Image from "next/image";
import { useTodos } from "@/app/hooks/useTodos/page";


const Selections = () => {
//!getting data from own hook
const { isFetching, data } = useTodos();

  return (
    <>
      <div className={style.selectionsContainer}>
        <h1 className={style.caption}>Подборки</h1>
        <div className={style.selectionsBlock}>
          {isFetching ? (<p>Loading...</p>) : (data.selections.map((items: any) => (
            <>
              <div className={style.selectionsDiv}>
                <Image
                  className={style.selImage}
                  alt={items.name}
                  src={items.image}
                  width={1000}
                  height={673}
                />
                <Image
                  className={style.selSvg}
                  alt={items.name}
                  src={items.svg}
                  width={1000}
                  height={673}
                />
                <p className={style.selName}>{items.name}</p>
              </div>
            </>
          )))}
        </div>
      </div>
    </>
  );
};

export default Selections;
