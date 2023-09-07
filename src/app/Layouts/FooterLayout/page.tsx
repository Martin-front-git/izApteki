import LogoComponent from "@/app/components/header/logo/page";
import React from "react";
import { Link } from "react-router-dom";
import style from "@/app/Styles/Footer/Footer.module.scss";
import { useTodos } from "@/app/hooks/useTodos/page";

interface MainLayoutProps {
  textColor: string;
}

const Footer: React.FC<MainLayoutProps> = () => {
  //!getting data from own hook
  const { isFetching, data } = useTodos();
  return (
    <>
      <div className={style.footerBlock}>
        <div className={style.gridBlock}>
          <p>
            <Link to={"/"}>
              <LogoComponent textColor="text-white text-[1.5vw]max-sm:text-[3.5vw]" />
            </Link>
          </p>
          {isFetching ? (<p>Loading...</p>) : (data.footer.map((item: any) => (
            <p key={item.id}>{item.name}</p>
          )))}
        </div>
      </div>
    </>
  );
};

export default Footer;
