'use client';
import React, { useState } from "react";
import LogoComponent from "./logo/page";
import InfoHeadComponent from "./infoHead/page";
import style from '@/app/Styles/Header/Header.module.scss';
import Cart from "./cart/page";
import SearchList from "./search/page";
import ProductList from "./productList/page";
import Banner from "./banner/page";
import Registration from "./registration/page";
import BurgerMenu from "./BurgerMenu/page";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <header className={style.header}>
      <div >
          <div className='max-md:hidden'>
                <div className={style.infoBlock}><InfoHeadComponent /></div>
                
                <div className={style.logoBlock}>
                  <div className={style.logo}><Link to={'/'}><LogoComponent /></Link></div>
                  <div className={style.cart}><Cart/></div>
                  <button className={style.register}><Registration/></button>
                </div>

                <div className={style.searchBlock}>
                    <div><SearchList/></div>
                </div>
              
                <div className={style.productList}><ProductList/></div>
                <div className={style.banner}><Banner/></div>
          </div>
          {/* burger menu */}
          <BurgerMenu/>
      </div>
      </header>
    </>
  );
};

export default HeaderComponent;
