import React from 'react'
import Chair from './chair'

function ChairWrap () {
  return (
    <div className='objects__item object'>
      <Chair />
      <div className='object__name'>Стул</div>
    </div>
  )
}

export default ChairWrap
