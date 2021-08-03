import React from 'react'
import BedGrayWrap from '../../furniture/beds/bed-gray/bed-gray-wrap'
import BedWhiteWrap from '../../furniture/beds/bed-white/bed-white-wrap'
import DavenportWrap from '../../furniture/sofas/davenport/davenport-wrap'
import KitchenSofaWrap from '../../furniture/sofas/kitchen-sofa/kitchen-sofa-wrap'

function SofasBedsSection () {
  return (
    <section className='objects__section'>
      <h3 className='objects__subtitle'>Диваны и кровати</h3>
      <div className='objects__list'>
        <KitchenSofaWrap />
        <DavenportWrap />
        <BedWhiteWrap />
        <BedGrayWrap />
      </div>
    </section>
  )
}

export default SofasBedsSection
