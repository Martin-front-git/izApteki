import React from 'react'
import style from '@/app/Styles/Header/Banner.module.scss';
import Image from 'next/image';
import tablet from '../../../../../public/images/tablet.png'

const Banner = () => {
  return (
    <>
        <div className={style.bannerBlock}>
            <Image src={tablet} alt='tablet' className={style.tabletGroup}/>
            <h1 className={style.bannerText}>Быстрая доставка курьером от 30 минут всего от 145 рублей*</h1>
            <p className={style.deliveryText}>*Стоимость доставки зависит от выбранной аптеки и периода времени доставки</p>
            <Image src={tablet} alt='tablet2' className={style.tabletGroupTwo}/>
        </div>
    </>
  )
}

export default Banner