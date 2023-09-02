"use client";
import React, { useEffect } from "react";
import LogoComponent from "./logo/page";
import InfoHeadComponent from "./infoHead/page";
import style from "@/app/Styles/Header/Header.module.scss";
import Cart from "./cart/page";
import SearchList from "./search/page";
import ProductList from "./productList/page";
import Banner from "./banner/page";
import Registration from "./registration/page";
import BurgerMenu from "./BurgerMenu/page";
import { Link } from "react-router-dom";
import Head from "next/head";

const HeaderComponent = ({ title }: { title: string }) => {
  //! Head title
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="интернет магазин лекарственных продуктов и косметики, главная страница "
        />
        <meta
          name="keywords"
          content="магазин,лекарственные продуктиб косметика"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Интернет аптека" />
        <meta property="og:description" content="Интернет аптека" />
        <meta property="og:image" content="http//.." />
        <meta property="og:url" content="http//.." />
      </Head>
      <header className={style.header}>
        <div>
          <div className="max-md:hidden">
            <div className={style.infoBlock}>
              <InfoHeadComponent />
            </div>

            <div className={style.logoBlock}>
              <div className={style.logo}>
                <Link to={"/"}>
                  <LogoComponent />
                </Link>
              </div>
              <div className={style.cart}>
                <Cart />
              </div>
              <button className={style.register}>
                <Registration />
              </button>
            </div>

            <div className={style.searchBlock}>
              <div>
                <SearchList />
              </div>
            </div>

            <div className={style.productList}>
              <ProductList />
            </div>
            <div className={style.banner}>
              <Banner />
            </div>
          </div>
          {/* burger menu */}
          <BurgerMenu />
        </div>
      </header>
      <Head>
        <title>Заголовок вашей страницы</title>
      </Head>
    </>
  );
};

export default HeaderComponent;
