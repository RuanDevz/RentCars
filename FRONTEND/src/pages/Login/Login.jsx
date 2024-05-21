import React from 'react'
import logo from '../../assets/Images/Logo.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
<div>
        <header className='flex justify-center items-center pt-28 pb-12'>
          <img className='w-48' src={logo} alt="logo" />
        </header>
        <form autoComplete='off' className='flex justify-center items-center flex-col mt-12 gap-16 font-primary text-base' action="">
          <div>
            <Input htmlFor='user' placeholder='User' type='text' name='user' id='user'/>
          </div>
          <div>
          <Input htmlFor='password' placeholder='Password' type='password' name='password' id='password'/>
          </div>
          <Button Children='Login'/>
          <Link  to='/Register'>
          <a className='text-primary underline' href="">Don´t have a account ?</a>
          </Link>
        </form>
    </div>
  )
}

export default Login
