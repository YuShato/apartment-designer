import React from 'react'
import Desk from './desk';

function DeskWrap () {
  return (
    <div className='objects__item object'>
      <Desk/>
      <div className='object__name'>Письменный стол</div>
    </div>
  )
}

export default DeskWrap;
