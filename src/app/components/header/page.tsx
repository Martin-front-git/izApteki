// 'use client';
// import React, { useState } from "react";
// import LogoComponent from "./logo/page";
// import InfoHeadComponent from "./infoHead/page";
// import style from '@/app/Styles/Header/Header.module.scss';
// import Cart from "./cart/page";
// import SearchList from "./search/page";
// import Link from "next/link";
// import ProductList from "./productList/page";
// import Banner from "./banner/page";
// import Registration from "./registration/page";

// const HeaderComponent = () => {
//   return (
//     <>
//       <header className={style.header}>
//         <div className={style.infoBlock}><InfoHeadComponent /></div>
        
//         <div className={style.logoBlock}>
//           <div className={style.logo}><Link href='/'><LogoComponent /></Link></div>
//           <div className={style.cart}><Cart/></div>
//           <button className={style.register}><Registration/></button>
//         </div>

//        <div className={style.searchBlock}>
//           <div className={style.catalog}>
//             <Link className={style.catalogLink} href={'/components/header/catalog'}>
//             Каталог
//             </Link>
//           </div>
//           <div className={style.search}><SearchList/></div>
//           <button className={style.productButton}>Продукт</button>
//           <button className={style.searchButton}>Найти</button>
//        </div>
       
//        <div className={style.productList}><ProductList/></div>
//        <div className={style.banner}><Banner/></div>
//       </header>
//     </>
//   );
// };

// export default HeaderComponent;
'use client';
import React, { useState } from "react";
import LogoComponent from "./logo/page";
import InfoHeadComponent from "./infoHead/page";
import style from '@/app/Styles/Header/Header.module.scss';
import Cart from "./cart/page";
import SearchList from "./search/page";
import Link from "next/link";
import ProductList from "./productList/page";
import Banner from "./banner/page";
import Registration from "./registration/page";
import BurgerMenu from "./BurgerMenu/page";

const HeaderComponent = () => {
  let [isMenuOpen,setIsMenuOpen] =  useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className={style.header}>
      <div >
          <div className='max-md:hidden'>
                <div className={style.infoBlock}><InfoHeadComponent /></div>
                
                <div className={style.logoBlock}>
                  <div className={style.logo}><Link href='/'><LogoComponent /></Link></div>
                  <div className={style.cart}><Cart/></div>
                  <button className={style.register}><Registration/></button>
                </div>

                <div className={style.searchBlock}>
                    <div className={style.catalog}>
                      <Link className={style.catalogLink} href={'/components/header/catalog'}>
                      Каталог
                      </Link>
                    </div>
                    <div className={style.search}><SearchList/></div>
                    <button className={style.productButton}>Продукт</button>
                    <button className={style.searchButton}>Найти</button>
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
