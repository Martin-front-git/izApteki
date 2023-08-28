import React from "react";
import selections from "@/app/data/selections.json";
import style from "@/app/Styles/Body/Selections.module.scss";
import Image from "next/image";

const Selections = () => {
  return (
    <>
      <div className={style.selectionsContainer}>
        <h1 className={style.caption}>Подборки</h1>
        <div className={style.selectionsBlock}>
          {selections.map((items: any) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Selections;
