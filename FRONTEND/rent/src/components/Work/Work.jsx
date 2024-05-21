import React from 'react'
import tick from './Images/tick.png'
import calendary from './Images/calendar.png'
import car from './Images/car.png'

const Work = () => {
  return (
    <div>
        <div data-aos="fade-down" className='flex justify-center items-center flex-col mt-20'>
        <h1 className='text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10'>HOW IT WORK</h1>
        <p className='text-2xl text-center lg:font-primary font-medium lg:text-4xl pb-28'>Rent with following 3 working steps</p>
        <div className='flex flex-col gap-1 lg:flex-row lg:justify-around lg:items-center text-center lg:gap-48'>
            <div>
                <div className='flex justify-center items-center py-7 bg-blue-100 max-w-28 mx-auto mb-10 rounded'>
                <img src={tick} alt="tick" />
                </div>
                <h1 className='font-primary font-medium text-xl pb-5'>Choose location</h1>
                <p className='max-w-64 text-gray-400 text-sm font-medium pb-44'>Choose your and find your best car</p>
            </div>
            <div>
                <div className='flex justify-center items-center py-7 bg-blue-100 max-w-28 mx-auto mb-10 rounded'>
                <img src={calendary} alt="calendary" />
                </div>
                <h1 className='font-primary font-medium text-xl pb-5'>Pick-up date</h1>
                <p className='max-w-64 text-gray-400 text-sm font-medium pb-44'>Select your pick up date andtime to book your car</p>
            </div>
            <div>
                <div className='flex justify-center items-center py-7 bg-blue-100 max-w-28 mx-auto mb-10 rounded'>
                <img src={car} alt="car" />
                </div>
                <h1 className='font-primary font-medium text-xl pb-5'>Book your car</h1>
                <p className='max-w-64 text-gray-400 text-sm font-medium pb-44'>Book your car and we will deliver it directly to you</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Work