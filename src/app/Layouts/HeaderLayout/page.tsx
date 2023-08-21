"use client";
import React, { ReactNode } from "react";
import HeaderComponent from "../../components/header/page";
import ProductsSlider from "../../components/slider/page";

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children}) => {
  return (
    <>
      <div>
        <HeaderComponent />
      </div>
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
