import React from 'react'
import Lamp from './lamp'

function LampWrap () {
  return (
    <div className='objects__item object'>
      <Lamp />
      <div className='object__name'>Лампа</div>
    </div>
  )
}

export default LampWrap
