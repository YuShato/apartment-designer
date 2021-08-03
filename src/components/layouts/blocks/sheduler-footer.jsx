import React from 'react'

function ShedulerFooter () {
  return (
    <div className='scheduler__footer'>
      <ul className='scheduler__data'>
        <li className='scheduler__data-item'>Площадь квадрата 1 кв. м.</li>
        <li className='scheduler__data-item'>Площадь квартиры 60 кв. м.</li>
      </ul>
      <div className='scheduler__actions'>
        <button
          className='scheduler__action undo scheduler__action-undo'
          type='button'
        >
          <svg
            className='undo__icon'
            fill='currentColor'
            height='1em'
            width='1em'
          >
            <use xlinkHref='#undo-icon'></use>
          </svg>
          Отменить последний шаг
        </button>
        <button
          className='scheduler__action button scheduler__action-reset'
          type='button'
        >
          <svg
            className='button__icon'
            fill='currentColor'
            height='1em'
            width='1em'
          >
            <use xlinkHref='#delete-icon'></use>
          </svg>
          Очистить квартиру
        </button>
      </div>
    </div>
  )
}

export default ShedulerFooter
