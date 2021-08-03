import React from 'react'
import ArmChairsSection from '../armchairs-section/armchairs-section'
import CabinetsSection from '../cabinets-section/cabinets-section'
import DecorSection from '../decor-section/decor-section'
import SofasBedsSection from '../sofas-beds-section/sofas-beds-section'
import TablesSection from '../tables-section/tables-section'

function RightBlock () {
  return (
    <section className='constructor__aside'>
      <div className='objects'>
        <h2 className='objects__title'>Выберите предметы мебели</h2>
        <div className='objects__sections'>
          <TablesSection />
          <ArmChairsSection />
          <SofasBedsSection />
          <CabinetsSection />
          <DecorSection />
        </div>
      </div>
    </section>
  )
}

export default RightBlock
