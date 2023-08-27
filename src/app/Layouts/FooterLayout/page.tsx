import LogoComponent from "@/app/components/header/logo/page";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from '@/app/Styles/Footer/Footer.module.scss';

interface MainLayoutProps {
  textColor: string;
}


const Footer: React.FC<MainLayoutProps> = () => {
  return (
    <>
      <div className={style.footerBlock}>
        <div className={style.logoBlock}>
            <p><Link to={'/'}><LogoComponent textColor='text-white text-[1.5vw]max-sm:text-[3.5vw]'/></Link></p>
            <p>Ваш город:  Москва</p>
            <p>+7 (495) 123-45-67</p>
        </div>
        <div>
            <p>Лекарства</p>
            <p>БАД</p>
            <p>БАД</p>
            <p>Новорождённые</p>
            <p>Гигиена</p>
        </div>
        <div className='max-md:hidden'>
            <p>Доставка</p>
            <p>Самовывоз</p>
            <p>Поставщикам</p>
            <p>Юридическим лицам</p>
            <p>Лицензия и реквизиты</p>
        </div>
        <div className="max-md:hidden">
            <p>О компании</p>
            <p>Реклама</p>
            <p>Вакансии</p>
            <p>Задать вопрос</p>
            <p>Пользовательское соглашение</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
