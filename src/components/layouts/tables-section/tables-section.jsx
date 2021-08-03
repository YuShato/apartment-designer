import React from 'react'
import DeskWrap from '../../furniture/tables/desk/desk-wrap'
import DinnerTableWrap from '../../furniture/tables/dinner-table/dinner-table-wrap'
import KitchenTableWrap from '../../furniture/tables/kitchen-table/kitchen-table-wrap'

function TablesSection () {
  return (
    <section className='objects__section'>
      <h3 className='objects__subtitle'>Столы</h3>
      <div className='objects__list'>
        <DinnerTableWrap />
        <KitchenTableWrap />
        <DeskWrap />
      </div>
    </section>
  )
}

export default TablesSection
