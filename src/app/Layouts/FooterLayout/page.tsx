import LogoComponent from "@/app/components/header/logo/page";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "@/app/Styles/Footer/Footer.module.scss";
import axios from "axios";

interface MainLayoutProps {
  textColor: string;
}
interface IProdList {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Footer: React.FC<MainLayoutProps> = () => {
  const [data, setData] = useState<IProdList[]>();
  useEffect(() => {
    const handleResize = () => {
      axios
        .get("/db.json")
        .then((response) => response.data.footer)
        .then((data) => {
          if (window.matchMedia("(max-width: 774px)").matches) {
            const halfLength = Math.ceil(data.length / 2);
            const halfData = data.slice(0, halfLength);
            setData(halfData);
          } else {
            setData(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={style.footerBlock}>
        <div className={style.gridBlock}>
          <p>
            <Link to={"/"}>
              <LogoComponent textColor="text-white text-[1.5vw]max-sm:text-[3.5vw]" />
            </Link>
          </p>
          {data.map((item: any) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
