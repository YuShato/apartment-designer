import React from 'react'
import ArmChairGrayWrap from '../../furniture/arm-chairs/arm-chair-gray/arm-chair-gray-wrap'
import ArmChairOrangeWrap from '../../furniture/arm-chairs/arm-chair-red/arm-chair-orange-wrap'
import ChairWrap from '../../furniture/chairs/chair/chair-wrap'
import StoolWrap from '../../furniture/chairs/stool/stool-wrap'

function ArmChairsSection () {
  return (
    <section className='objects__section'>
      <h3 className='objects__subtitle'>Стулья и кресла</h3>
      <div className='objects__list'>
        <StoolWrap />
        <ChairWrap />
        <ArmChairOrangeWrap />
        <ArmChairGrayWrap />
      </div>
    </section>
  )
}

export default ArmChairsSection
