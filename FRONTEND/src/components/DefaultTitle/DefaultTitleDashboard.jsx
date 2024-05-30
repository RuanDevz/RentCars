import React from 'react'

const DefaultTitleDashboard = ({children}) => {
  return (
    <div>
        <p className='mt-32 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10 max-w-56'>{children}</p>
    </div>
  )
}

export default DefaultTitleDashboard