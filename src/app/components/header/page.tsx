'use client';
import React from "react";
import LogoComponent from "./logo/page";
import InfoHeadComponent from "./infoHead/page";
import style from '@/app/Styles/Header.module.scss';
import Cart from "../cart/page";
import SearchList from "../search/page";
import CatalogComponent from "../catalog/page";
import Link from "next/link";
import ProductList from "../productList/page";
import Banner from "../banner/page";

const HeaderComponent = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.infoBlock}><InfoHeadComponent /></div>
        <div className={style.logo}><LogoComponent /></div>
        <div className={style.cart}><Cart/></div>
        <button className={style.register}>Мартин О.</button>
       <div className={style.searchBlock}>
        <div className={style.catalog}>
            <Link className={style.catalogLink} href={'/components/catalog'}>
            Каталог
            </Link>
          </div>
          <div className={style.search}><SearchList/></div>
          <button className={style.productButton}>Продукт</button>
          <button className={style.searchButton}>Найти</button>
       </div>
       <div><ProductList/></div>
       <div className={style.banner}><Banner/></div>
      </header>
    </>
  );
};

export default HeaderComponent;
