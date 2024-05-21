import React from 'react'
import logo from '../../assets/Images/Logo.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handlelogin = async (e) =>{
    e.preventDefault()

    await axios.post('http://localhost:3000/user/auth',{
      username: username,
      password: password
    }).then((response) =>{
      console.log(response.data)
    }).catch(() =>{
      setError("usuario ou senha incorretos")
    })
  }
  return (
<div>
        <header className='flex justify-center items-center pt-28 pb-12'>
          <img className='w-48' src={logo} alt="logo" />
        </header>
        <form autoComplete='off' className='flex justify-center items-center flex-col mt-12 gap-16 font-primary text-base' onSubmit={handlelogin}>
          <div>
            <Input onChange={(e) => setUsername(e.target.value)} htmlFor='user' placeholder='User' type='text' name='user' id='user'/>
          </div>
          <div>
          <Input onChange={(e) => setPassword(e.target.value)} htmlFor='password' placeholder='Password' type='password' name='password' id='password'/>
          </div>
          <Button onClick={handlelogin} Children='Login'/>
          {error && (
          <p className='text-base text-red-600 text-center font-primary font-medium'>
            {error}
          </p>
        )}
          <Link  to='/Register'>
          <a className='text-primary underline' href="">Don´t have a account ?</a>
          </Link>
        </form>
    </div>
  )
}

export default Login
