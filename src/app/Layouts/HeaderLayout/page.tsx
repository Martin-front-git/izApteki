"use client";
import React, { ReactNode } from "react";
import HeaderComponent from "../../components/header/page";
import SearchList from "@/app/components/header/search/page";
import BodyComponent from "@/app/components/body/page";

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children}) => {
  return (
    <>
      <div className="relative">
        <HeaderComponent />
      </div>
      <div >
        {children}
        </div>
    </>
  );
};

export default HeaderLayout;
