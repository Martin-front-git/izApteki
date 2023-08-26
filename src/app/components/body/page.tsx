import React from 'react'
import Slider from './slider/page'
import data from '@/app/data/db.json'
import style from '@/app/Styles/Body/Body.module.scss'

const BodyComponent = () => {
  return (
    <>
        <Slider data={data}/>    
    </>
  )
}

export default BodyComponent