import React from 'react'
import CabinetWrap from '../../furniture/cabinets/cabinet/cabinet-wrap'
import CurbstoneDarkWrap from '../../furniture/cabinets/curbstone-dark/curbstone-dark-wrap'
import CurbstoneLightWrap from '../../furniture/cabinets/curbstone-light/curbstone-light-wrap'
import DresserDarkWrap from '../../furniture/cabinets/dresser-dark/dresser-dark-wrap'
import DresserLightWrap from '../../furniture/cabinets/dresser-light/dresser-light-wrap'

function CabinetsSection () {
  return (
    <section className='objects__section'>
      <h3 className='objects__subtitle'>Шкафы, комоды, тумбы</h3>
      <div className='objects__list'>
        <CabinetWrap />
        <DresserLightWrap />
        <DresserDarkWrap />
        <CurbstoneDarkWrap />
        <CurbstoneLightWrap />
      </div>
    </section>
  )
}

export default CabinetsSection
