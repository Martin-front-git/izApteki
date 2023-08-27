import React, { useState } from "react";
import SearchList from "../search/page";
import LogoComponent from "../logo/page";
import style from '@/app/Styles/Body/Burger.module.scss'
import Cart from "../cart/page";
import Banner from "../banner/page";
import ProductList from "../productList/page";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className={style.burgerBlock}>
        <div className={style.buttonBlock}>
          <button
            type="button"
            className={style.burgerButton}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
              className='w-[8vw h-[8vw] block'
                xmlns="http://www.w3.org/2000/svg"
                
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
              className='w-[8vw h-[8vw] block'
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div className={style.logo}><Link to={'/'} ><LogoComponent/></Link></div>
          <span className={style.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">
            <path d="M19.235 20.788L19.2337 20.7868L13.9752 15.5283C12.5601 16.606 10.8298 17.1903 9.04942 17.1903C9.0494 17.1903 9.04939 17.1903 9.04937 17.1903L9.04937 17.0903L19.235 20.788ZM19.235 20.788C19.6722 21.2103 20.3688 21.1982 20.7911 20.761C21.2029 20.3345 21.2029 19.6584 20.7911 19.2319L20.7911 19.2319M19.235 20.788L20.7911 19.2319M20.7911 19.2319L20.7898 19.2307M20.7911 19.2319L20.7898 19.2307M20.7898 19.2307L15.5313 13.9721L20.7898 19.2307ZM4.845 4.84192L4.84485 4.84207L4.81414 4.87278C2.50917 7.19467 2.52285 10.9455 4.84474 13.2505L4.84479 13.2505L4.845 4.84192ZM4.845 4.84192C7.16704 2.51984 10.9318 2.5198 13.2539 4.84184M4.845 4.84192L13.2539 4.84184M13.2539 4.84184C15.576 7.16387 15.576 10.9286 13.254 13.2507M13.2539 4.84184L13.254 13.2507M13.254 13.2507C10.9321 15.5726 7.1677 15.5728 4.84558 13.2513M13.254 13.2507L4.84558 13.2513M4.84558 13.2513C4.84542 13.2511 4.84524 13.251 4.84509 13.2508L4.84558 13.2513Z" fill="#00395D" stroke="#00395D" stroke-width="0.2"/>
            </svg>
          </span>
          <div className={style.cart}><Cart/></div>
        </div>
        <SearchList/>
        <Banner/>
      </div>
      
      
      
      {/* burger menu body */}
      <div className={`${isMenuOpen ? "" : "hidden"} `}>
        <div className={style.burgerBody}>
          <ProductList/>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
