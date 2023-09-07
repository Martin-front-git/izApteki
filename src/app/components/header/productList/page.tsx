import React from "react";
import style from "@/app/Styles/Header/ProductList.module.scss";
import { useTodos } from "@/app/hooks/useTodos/page";

let ProductList = () => {
  //!getting data from own hook
  const { isFetching, data } = useTodos();

  return (
    <>
      <div className={style.productBlock}>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          data.prodList.map((pr: any) => (
            <span key={pr.id} className={style.products}>
              {pr.name}
            </span>
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
