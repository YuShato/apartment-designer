import React from 'react'
import LampWrap from '../../furniture/decor/lamp/lamp-wrap'
import OttomanWrap from '../../furniture/decor/ottoman/ottoman-wrap'
import PlantWrap from '../../furniture/decor/plant/plant-wrap'

function DecorSection () {
  return (
    <section className='objects__section'>
      <h3 className='objects__subtitle'>Декор</h3>
      <div className='objects__list'>
        <LampWrap />
        <PlantWrap />
        <OttomanWrap />
      </div>
    </section>
  )
}

export default DecorSection
