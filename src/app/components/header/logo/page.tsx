import Image from "next/image";
import React from "react";
import logoImg from "@/app/images/logoImg.png";
import style from "@/app/Styles/Header/Logo.module.scss";

const LogoComponent = () => {
  return (
    <>
      <div className={style.logoBlock}>
        <Image alt="Logo_Image" src={logoImg} className={style.logoImg} />
        <p className={style.logoName}>izApteki</p>
      </div>
      
    </>
  );
};

export default LogoComponent;
