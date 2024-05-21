import React from 'react'

const Input = ({onChange, htmlFor, placeholder,type, name, id}) => {
  return (
    <div>
    <label htmlFor={htmlFor}></label>
     <input onChange={onChange} className='border-b-2 border-primary w-64 focus:outline-none' placeholder={placeholder} type={type} name={name} id={id} />
    </div>
  )
}

export default Input