"use client";
import React, { ReactNode } from "react";
import HeaderComponent from "../../components/header/page";
import Footer from "@/app/components/footer/page";

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({children}) => {
  return (
    <>
      <header className="relative">
        <HeaderComponent />
      </header>
      <div>
        {children}
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default HeaderLayout;
