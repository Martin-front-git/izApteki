import React, { useEffect, useState } from "react";
import style from "@/app/Styles/Body/SearchBlock.module.scss";
import axios from "axios";

interface ISearchAlfavit {
  id: number;
  name: string;
}
interface IProduct {
  id: number;
  name: string;
}
interface IDrugs {
  id: number;
  name: string;
}

const SearchBlock = () => {
  const [data, setData] = useState<
    {
      alfavit: ISearchAlfavit[];
      prodNames: IProduct[];
      drug: IDrugs[];
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        const productsBlockData = response.data.productsBlock;
        setData(productsBlockData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
      {data.map((productData, index) => (
        <div key={index} className={style.searchBlock}>
          <h1 className={style.caption}>Поиск лекарств</h1>
          <div className={style.drugDiv}>
          {productData.drug.map((item) => (
            <>
              <div className={style.drugs} key={item.id}>{item.name}</div>
            </>
          ))} 
          </div>
          <div className={style.alphaDiv}>
          <p>Искать по алфавиту</p>
          {productData.alfavit.map((item) => (
            <>
              <span className={style.letters} key={item.id}>{item.name}</span>
            </>
          ))}
          </div>
          <div className={style.prodDiv}>
          {productData.prodNames.map((item) => (
            <div key={item.id}>
              <span className={style.products}>{item.name}</span>
            </div>
          ))}
          </div>
          
        </div>
      ))}
    </>
  );
};

export default SearchBlock;
