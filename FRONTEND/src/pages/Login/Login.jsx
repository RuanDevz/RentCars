import React, { useContext, useState, useEffect } from 'react'
import logo from '../../assets/Images/Logo.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Context from '../../useContext/Context'
import Popup from '../../components/Popup/Popup'

const Login = () => {

  const {showMessage, setShowMessage,error, setError, msg, setMsg} = useContext(Context)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [accessToken, setAccessToken] = useState('')
  const [userdata, setUserdata] = useState([])

  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
        setError('');
        setMsg('');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  const handlelogin = async (e) =>{
    e.preventDefault()

    await axios.post('http://localhost:3000/user/auth',{
      username: username,
      password: password
    }).then((response) =>{
      console.log(response.data)
      setAccessToken(response.data.accessToken)
      setUserdata(response.data.user.username)
      setMsg('Login efetuado com sucesso!')
      setShowMessage(true)
    }).catch(() =>{
      setError("usuario ou senha incorretos")
    })
  }

  useEffect(() => {
    sessionStorage.setItem("accessToken", accessToken)
    sessionStorage.setItem("user", userdata)
  }, [accessToken, userdata])

  
  return (
<div>
  <Header/>
  {showMessage &&(
          <Popup />
        )}
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
          <Link  to='/Register'>
          <a className='text-primary underline' href="">Don´t have a account ?</a>
          </Link>
        </form>
        <div className='mt-32'>
        <Footer/>
        </div>
    </div>
  )
}

export default Login
