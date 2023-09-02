"use client";
import React, { ReactNode } from "react";
import HeaderComponent from "../../components/header/page";
import Footer from "@/app/components/footer/page";
import Head from "next/head";

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({children}) => {
  return (
    <>
      <header className="relative">
        <HeaderComponent title=''/>
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
