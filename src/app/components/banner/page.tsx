import React from 'react'
import style from '@/app/Styles/Banner.module.scss';
import Image from 'next/image';
import tablet from '@/app/images/tablet.png'

const Banner = () => {
  return (
    <>
        <div className={style.bannerBlock}>
            <Image src={tablet} alt='tablet' className={style.tabletGroup}/>
            <h1 className={style.bannerText}>Быстрая доставка курьером от 30 минут всего от 145 рублей*</h1>
            <Image src={tablet} alt='tablet2' className={style.tabletGroupTwo}/>
        </div>
    </>
  )
}

export default Banner