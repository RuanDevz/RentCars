import React from 'react'
import backgroundaudi from './Images/BackgroundAudi.png'
import audi from './Images/Audi.png'

const CarAudi = () => {
  return (
    <div>
       <section className='car'>
                    <img className='absolute z-10 mt-28' src={audi} alt="audi" />
                    <img src={backgroundaudi} alt="backgroundaudi" />
        </section>
    </div>
  )
}

export default CarAudi
