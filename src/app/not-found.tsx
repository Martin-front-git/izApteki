'use client';
import React from 'react'
import HeaderLayout from './Layouts/HeaderLayout/page';
import style from '@/app/Styles/Error/NotFound.module.scss';
import Image from 'next/image';
import error from '../../public/images/404.png'

const NotFound = () => {
  return (
    <HeaderLayout>
      
      <div className={style.errorBlock}>
        <div className={style.infoDiv}>
          <h1>Ой... Похоже такой страницы нет</h1>
          <p>Вы можете воспользоваться поиском или продолжить покупки</p>
          <button>
            <a href={'/'}>Продолжить покупки</a>
          </button>
        </div>
        <div className={style.imgDiv}>
          <Image src={error} alt='error' width={1200} height={1200}/>
        </div>
      </div>

    </HeaderLayout>
  )
}

export default NotFound;