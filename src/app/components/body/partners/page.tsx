import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import style from "@/app/Styles/Body/Partners.module.scss";

interface IPartners {
  id: number;
  name: string;
  image: string;
  svg: string;
}

const Partners = () => {
  const [data, setData] = useState<IPartners[]>();

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => response.data.partners)
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
      <div className={style.partnersBlock}>
        <h1 className={style.caption}>Наши партнёры</h1>
        <div className={style.imageDiv}>
          {data.map((item: any) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
