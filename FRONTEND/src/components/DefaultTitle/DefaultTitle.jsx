import React from 'react'

const DefaultTitle = ({children}) => {
  return (
    <div>
        <div className='flex justify-center mx-auto mt-10 p-5 lg:mt-20 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-14 bg-blue-100 rounded mb-10 max-w-64'>
        <h1 className='text-2xl text-primary '>{children}</h1>
        </div>
    </div>
  )
}

export default DefaultTitle