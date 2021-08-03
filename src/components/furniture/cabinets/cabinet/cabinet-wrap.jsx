import React from 'react'
import Cabinet from './cabinet'

function CabinetWrap () {
  return (
    <div className='objects__item object'>
      <Cabinet />
      <div className='object__name'>Большой шкаф</div>
    </div>
  )
}

export default CabinetWrap
