import React, { useEffect, useState } from "react";
import style from "@/app/Styles/Header/ProductList.module.scss";
import axios from "axios";

interface IProdList {
  id: number;
  name: string;
}

let ProductList = () => {
  const [data, setData] = useState<IProdList[]>();

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => response.data.prodList)
      .then((data) => setData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  let prodMap = data.map((pr: any) => (
    <span key={pr.id} className={style.products}>
      {pr.name}
    </span>
  ));
  return (
    <>
      <div className={style.productBlock}>{prodMap}</div>
    </>
  );
};

export default ProductList;
