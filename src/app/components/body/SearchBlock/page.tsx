import React from "react";
import style from "@/app/Styles/Body/SearchBlock.module.scss";
import { useTodos } from "@/app/hooks/useTodos/page";


const SearchBlock = () => {
//!getting data from own hook
const { isFetching, data } = useTodos();

  return (
    <>
    
      {isFetching ? (<p>Loading...</p>) : (data.productsBlock.map((productData:any, index:any) => (
        <div key={index} className={style.searchBlock}>
          <h1 className={style.caption}>Поиск лекарств</h1>
          <div className={style.drugDiv}>
          {productData.drug.map((item:any) => (
            <>
              <div className={style.drugs} key={item.id}>{item.name}</div>
            </>
          ))} 
          </div>
          <div className={style.alphaDiv}>
          <p>Искать по алфавиту</p>
          {productData.alfavit.map((item:any) => (
            <>
              <span className={style.letters} key={item.id}>{item.name}</span>
            </>
          ))}
          </div>
          <div className={style.prodDiv}>
          {productData.prodNames.map((item:any) => (
            <div key={item.id}>
              <span className={style.products}>{item.name}</span>
            </div>
          ))}
          </div>
          
        </div>
      )))}
    </>
  );
};

export default SearchBlock;
