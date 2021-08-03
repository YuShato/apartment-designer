import React from 'react'
import Plant from './plant'

function PlantWrap () {
  return (
    <div className='objects__item object'>
      <Plant />
      <div className='object__name'>Растение</div>
    </div>
  )
}

export default PlantWrap
