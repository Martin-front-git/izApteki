'use client';
import React from "react";
import LogoComponent from "./logo/page";
import InfoHeadComponent from "./infoHead/page";
import style from '@/app/Styles/Header.module.scss';
import Cart from "../cart/page";
import SearchList from "../search/page";
import CatalogComponent from "../catalog/page";

const HeaderComponent = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.infoBlock}><InfoHeadComponent /></div>
        <div className={style.logo}><LogoComponent /></div>
        <div className={style.cart}><Cart/></div>
        <div className={style.catalog}><CatalogComponent/></div>
        {/* <div><SearchList/></div> */}
      </header>
    </>
  );
};

export default HeaderComponent;
