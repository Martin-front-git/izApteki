import React from 'react'
import style from '@/app/Styles/infoHead.module.scss';

const InfoHeadComponent = () => {
  return (
    <>
        <div className={style.infoBlock}>
            <p className={style.country}>Город: Москва</p>
            <p className={style.pickup}>Самовывоз</p>
            <p className={style.delivery}>Доставка</p>
            <p className={style.telNum}>+7 (495) 123-45-67</p> 
        </div>
    </>
  )
}

export default InfoHeadComponent;