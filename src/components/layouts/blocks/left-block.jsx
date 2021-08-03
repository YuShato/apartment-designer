import React from 'react'
import ShedulerFooter from './sheduler-footer'

function LeftBlock () {
  return (
    <section className='scheduler'>
      <h1 className='scheduler__title'>Планировщик квартиры</h1>
      <div className='plan'>
        <svg width='661' height='397' className='plan__grid-svg'>
          <defs>
            <pattern
              id='grid'
              width='66'
              height='66'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 100 0 L 0 0 0 100'
                fill='none'
                stroke='gray'
                strokeWidth='1'
              ></path>
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)'></rect>
        </svg>
        <div className='plan__grid'>
          <div className='plan__cell cell-1-1' data-x='1' data-y='1'></div>
          <div className='plan__cell cell-2-1' data-x='2' data-y='1'></div>
          <div className='plan__cell cell-3-1' data-x='3' data-y='1'></div>
          <div className='plan__cell cell-4-1' data-x='4' data-y='1'></div>
          <div className='plan__cell cell-5-1' data-x='5' data-y='1'></div>
          <div className='plan__cell cell-6-1' data-x='6' data-y='1'></div>
          <div className='plan__cell cell-7-1' data-x='7' data-y='1'></div>
          <div className='plan__cell cell-8-1' data-x='8' data-y='1'></div>
          <div className='plan__cell cell-9-1' data-x='9' data-y='1'></div>
          <div className='plan__cell cell-10-1' data-x='10' data-y='1'></div>
          <div className='plan__cell cell-1-2' data-x='1' data-y='2'></div>
          <div className='plan__cell cell-2-2' data-x='2' data-y='2'></div>
          <div className='plan__cell cell-3-2' data-x='3' data-y='2'></div>
          <div className='plan__cell cell-4-2' data-x='4' data-y='2'></div>
          <div className='plan__cell cell-5-2' data-x='5' data-y='2'></div>
          <div className='plan__cell cell-6-2' data-x='6' data-y='2'></div>
          <div className='plan__cell cell-7-2' data-x='7' data-y='2'></div>
          <div className='plan__cell cell-8-2' data-x='8' data-y='2'></div>
          <div className='plan__cell cell-9-2' data-x='9' data-y='2'></div>
          <div className='plan__cell cell-10-2' data-x='10' data-y='2'></div>
          <div className='plan__cell cell-1-3' data-x='1' data-y='3'></div>
          <div className='plan__cell cell-2-3' data-x='2' data-y='3'></div>
          <div className='plan__cell cell-3-3' data-x='3' data-y='3'></div>
          <div className='plan__cell cell-4-3' data-x='4' data-y='3'></div>
          <div className='plan__cell cell-5-3' data-x='5' data-y='3'></div>
          <div className='plan__cell cell-6-3' data-x='6' data-y='3'></div>
          <div className='plan__cell cell-7-3' data-x='7' data-y='3'></div>
          <div className='plan__cell cell-8-3' data-x='8' data-y='3'></div>
          <div className='plan__cell cell-9-3' data-x='9' data-y='3'></div>
          <div className='plan__cell cell-10-3' data-x='10' data-y='3'></div>
          <div className='plan__cell cell-1-4' data-x='1' data-y='4'></div>
          <div className='plan__cell cell-2-4' data-x='2' data-y='4'></div>
          <div className='plan__cell cell-3-4' data-x='3' data-y='4'></div>
          <div className='plan__cell cell-4-4' data-x='4' data-y='4'></div>
          <div className='plan__cell cell-5-4' data-x='5' data-y='4'></div>
          <div className='plan__cell cell-6-4' data-x='6' data-y='4'></div>
          <div className='plan__cell cell-7-4' data-x='7' data-y='4'></div>
          <div className='plan__cell cell-8-4' data-x='8' data-y='4'></div>
          <div className='plan__cell cell-9-4' data-x='9' data-y='4'></div>
          <div className='plan__cell cell-10-4' data-x='10' data-y='4'></div>
          <div className='plan__cell cell-1-5' data-x='1' data-y='5'></div>
          <div className='plan__cell cell-2-5' data-x='2' data-y='5'></div>
          <div className='plan__cell cell-3-5' data-x='3' data-y='5'></div>
          <div className='plan__cell cell-4-5' data-x='4' data-y='5'></div>
          <div className='plan__cell cell-5-5' data-x='5' data-y='5'></div>
          <div className='plan__cell cell-6-5' data-x='6' data-y='5'></div>
          <div className='plan__cell cell-7-5' data-x='7' data-y='5'></div>
          <div className='plan__cell cell-8-5' data-x='8' data-y='5'></div>
          <div className='plan__cell cell-9-5' data-x='9' data-y='5'></div>
          <div className='plan__cell cell-10-5' data-x='10' data-y='5'></div>
          <div className='plan__cell cell-1-6' data-x='1' data-y='6'></div>
          <div className='plan__cell cell-2-6' data-x='2' data-y='6'></div>
          <div className='plan__cell cell-3-6' data-x='3' data-y='6'></div>
          <div className='plan__cell cell-4-6' data-x='4' data-y='6'></div>
          <div
            className='plan__cell cell-5-6 plan__cell_error'
            data-x='5'
            data-y='6'
          ></div>
          <div
            className='plan__cell cell-6-6 plan__cell_error'
            data-x='6'
            data-y='6'
          ></div>
          <div className='plan__cell cell-7-6' data-x='7' data-y='6'></div>
          <div className='plan__cell cell-8-6' data-x='8' data-y='6'></div>
          <div
            className='plan__cell plan__cell_success cell-9-6'
            data-x='9'
            data-y='6'
          ></div>
          <div
            className='plan__cell plan__cell_success cell-10-6'
            data-x='10'
            data-y='6'
          ></div>
        </div>

        <div
          className='objects__item object'
          data-index='0'
          data-id='f26b6ae'
          style={{ left: '528px', top: '264px' }}
        >
          <div className='figure figure_oval' data-id='f26b6ae'>
            <div className='figure__overlay'>
              <svg
                className='figure__button figure__button-rotate'
                fill='currentColor'
                height='1em'
                width='1em'
              >
                <use xlinkHref='#rotate-icon'></use>
              </svg>

              <svg
                className='figure__button figure__button-delete'
                fill='currentColor'
                height='1em'
                width='1em'
              >
                <use xlinkHref='#delete-icon'></use>
              </svg>
            </div>
            <img
              className='figure__img'
              src='img/object-1.png'
              alt='Обеденный стол'
            ></img>
          </div>
        </div>
      </div>

      <ShedulerFooter />
    </section>
  )
}

export default LeftBlock
