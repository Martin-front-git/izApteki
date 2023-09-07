import React, { useEffect, useState } from "react";
import HeaderLayout from "@/app/Layouts/HeaderLayout/page";
import style from "@/app/Styles/Header/Catalog.module.scss";
import Head from "next/head";
import { Link } from "react-router-dom";
import { useTodos } from "@/app/hooks/useTodos/page";

const CatalogComponent = ({ title }: { title: string }) => {
  //!getting data from own hook
  const { isFetching, data } = useTodos();
  //! Head title
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <HeaderLayout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="интернет магазин лекарственных продуктов и косметики, страница каталога "
        />
        <meta
          name="keywords"
          content="магазин,лекарственные продуктиб косметика"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Интернет аптека" />
        <meta property="og:description" content="Интернет аптека" />
        <meta property="og:image" content="http//.." />
        <meta property="og:url" content="http//.." />
      </Head>
      <div className={style.catalogBlock}>
        <h1 className={style.caption}>Каталог товаров</h1>
        <div className={style.catalogGridBlock}>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            data.catalog.map((productData: any, index: any) => (
              <>
                <div key={index} className={style.block_1}>
                  <h1 className={style.Listcaption}>Лекарственные препараты</h1>
                  <div key={index}>
                    {productData.medications.map((item: any) => (
                      <>
                        <Link to={`/product/${item.id}`}>
                          <p key={item.id}>{item.name}</p>
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
                <div key={index} className={style.block_2}>
                  <div>
                    <h1 className={style.Listcaption}>Витамины и БАД</h1>
                    <div key={index}>
                      {productData.vitamins.map((item: any) => (
                        <>
                          <p key={item.key}>{item.name}</p>
                        </>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h1 className={style.Listcaption}>Красота</h1>
                    <div key={index}>
                      {productData.beauty.map((item: any) => (
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
                      {productData.hygiene.map((item: any) => (
                        <>
                          <p key={item.key}>{item.name}</p>
                        </>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h1 className={style.Listcaption}>Мать и дитя</h1>
                    <div key={index}>
                      {productData.mother.map((item: any) => (
                        <>
                          <p key={item.id}>{item.name}</p>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </HeaderLayout>
  );
};

export default CatalogComponent;
