import Image from "next/image";
import React from "react";
import logoImg from "../../../../../public/images/logoImg.png";
import style from "@/app/Styles/Header/Logo.module.scss";

const LogoComponent = (props: any) => {
  return (
    <>
      <div className={style.logoBlock}>
        <Image alt="Logo_Image" src={logoImg} className={style.logoImg} />
        <p className={`style.logoName ${props.textColor ? props.textColor : ''}`}>
          izApteki
        </p>

      </div>
    </>
  );
};

export default LogoComponent;
