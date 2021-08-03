import React from 'react'
import DinnerTable from './dinner-table'

function DinnerTableWrap () {
  return (
    <div className='objects__item object'>
      <DinnerTable />
      <div className='object__name'>Обеденный стол</div>
    </div>
  )
}

export default DinnerTableWrap
