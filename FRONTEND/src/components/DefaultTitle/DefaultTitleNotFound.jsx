import React from 'react'

const DefaultTitleNotFound = ({children}) => {
  return (
    <div>
        <div className='bg-red-100 my-20 w-96 mx-auto'>
        <p className='text-2xl font-bold text-center text-red-600 py-5 px-5 rounded-xl'>{children}</p>
    </div>
    </div>
  )
}

export default DefaultTitleNotFound