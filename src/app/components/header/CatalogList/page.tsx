import HeaderLayout from "@/app/Layouts/HeaderLayout/page";
import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from '@/app/Styles/Header/CatalogList.module.scss';
import { useTodos } from "@/app/hooks/useTodos/page";

const CatalogList = () => {
  //!getting data from own hook
  const { isFetching, data } = useTodos();
  
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
  };

  return (
    <HeaderLayout>
      <div className={style.catalogListBlock}>
        <div className={style.catalogList}>
          {isFetching ? (<p>Loading...</p>) : (data.catalog.map((productData: any, index: number) => (
            <div key={index} className='max-sm:w-[96vw] max-sm:h-[54vw] max-sm:grid max-sm:grid-cols-3'>
              {productData.medication.map((item: any) => (
                <div key={item.id} >
                  <Link
                    to={`/cataloglist`}
                    onClick={() => handleProductClick(item.id)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          )))}
        </div>
        <div className={style.catalogOut}>
          {selectedProductId !== null && (
            <div >
              {isFetching ? (<p>Loading...</p>) : (data.catalog.map((productData: any, index: number) => {
                const selectedProduct = productData.medication.find(
                  (item: any) => item.id === selectedProductId
                );

                return (
                  selectedProduct && (
                   <div>
                     <h1 className={style.caption}>{selectedProduct.name}</h1>
                      <div className={style.flexDiv}>
                        
                        {selectedProduct.list.map((item: any) => (
                          <div key={item.id} className={style.item}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={1000}
                              height={1000}
                              className={style.image}
                            />
                            <p>{item.name}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                  )
                );
              }))}
            </div>
          )}
        </div>
      </div>
    </HeaderLayout>
  );
};

export default CatalogList;
