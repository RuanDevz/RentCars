import React from 'react'

const Input = ({onChange, htmlFor, placeholder,type, name, id,maxLength}) => {
  return (
    <div>
    <label htmlFor={htmlFor}></label>
     <input maxLength={maxLength} onChange={onChange} className='border-b-2 border-primary w-64 focus:outline-none lg:w-96 my-5 text-xl' placeholder={placeholder} type={type} name={name} id={id} />
    </div>
  )
}

export default Input