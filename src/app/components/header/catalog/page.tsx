import React, { useEffect, useState } from "react";
import HeaderLayout from "@/app/Layouts/HeaderLayout/page";
import axios from "axios";
import style from '@/app/Styles/Header/Catalog.module.scss'

interface IMediacations{
    id: number;
    name: string;
  }
  interface IVitamins {
    id: number;
    name: string;
  }
  interface IBeauty {
    id: number;
    name: string;
  }
  interface IHygiene {
    id: number;
    name: string;
  }
  interface IMother {
    id: number;
    name: string;
  }

const CatalogComponent=()=>{
    const [data, setData] = useState<
    {
      medications: IMediacations[];
      vitamins: IVitamins[];
      beauty: IBeauty[];
      hygiene: IHygiene[];
      mother: IMother[];
    }[]
  >([]);
    useEffect(() => {
        axios
          .get("/db.json")
          .then((response) => {
            const productsBlockData = response.data.catalog;
            setData(productsBlockData);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
      if (data.length === 0) {
        return <div>Loading...</div>;
      }
    return(
        <HeaderLayout>
            <div className={style.catalogBlock}>
            <h1 className={style.caption}>Каталог товаров</h1>
                <div className={style.catalogGridBlock}>
                
                {data.map((productData, index)=>(
                    <>
                        <div key={index} className={style.block_1}>
                        <h1 className={style.Listcaption}>Лекарственные препараты</h1>
                            <div key={index}>
                                {productData.medications.map((item:any)=>(
                                    <>
                                        <p key={item.id}>{item.name}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div key={index} className={style.block_2}>
                            <div>
                                <h1 className={style.Listcaption}>Витамины и БАД</h1>
                                <div key={index}>
                                    {productData.vitamins.map((item:any)=>(
                                        <>
                                            <p key={item.key}>{item.name}</p>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 className={style.Listcaption}>Красота</h1>
                                <div key={index}>
                                    {productData.beauty.map((item:any)=>(
                                        <>
                                            <p key={item.id}>{item.name}</p>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div key={index} className={style.block_3}>
                            <div>
                                <h1 className={style.Listcaption}>Гигиена</h1>
                                <div key={index}>
                                    {productData.hygiene.map((item:any)=>(
                                        <>
                                            <p key={item.key}>{item.name}</p>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 className={style.Listcaption}>Мать и дитя</h1>
                                <div key={index}>
                                    {productData.mother.map((item:any)=>(
                                        <>
                                            <p key={item.id}>{item.name}</p>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                </div>
            </div>
        </HeaderLayout>
    )
}

export default CatalogComponent;