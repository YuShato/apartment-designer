import React from 'react'
import KitchenTable from './kitchen-table';

function KitchenTableWrap () {
  return (
    <div className='objects__item object'>
      <KitchenTable/>
      <div className='object__name'>Кухонный стол</div>
    </div>
  )
}

export default KitchenTableWrap;
