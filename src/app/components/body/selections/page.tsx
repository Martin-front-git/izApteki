import React, { useEffect, useState } from "react";
import style from "@/app/Styles/Body/Selections.module.scss";
import Image from "next/image";
import axios from "axios";

interface ISelections {
  id: number;
  name: string;
  image: string;
  svg: string;
}

const Selections = () => {
  const [data, setData] = useState<ISelections[]>();

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => response.data.selections)
      .then((data) => setData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={style.selectionsContainer}>
        <h1 className={style.caption}>Подборки</h1>
        <div className={style.selectionsBlock}>
          {data.map((items: any) => (
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
