import React from 'react'
import prodList from '@/app/data/prodList.json';
import style from '@/app/Styles/Header/ProductList.module.scss';

let ProductList =()=>{

    let prodMap = prodList.map((pr:any)=><span key={pr.id} className={style.products}>{pr.name}</span>)
    return(
        <>
            <div className={style.productBlock}>{prodMap}</div>
        </>
    )
}

export default ProductList;