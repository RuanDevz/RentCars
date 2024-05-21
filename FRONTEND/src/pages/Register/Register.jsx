import React, { useState, useEffect, useContext } from 'react';
import logo from '../../assets/Images/Logo.png';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Context from '../../useContext/Context';
import Popup from '../../components/Popup/Popup';

const Register = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [msg, setMsg] = useState('');

  const {showMessage, setShowMessage,error, setError} = useContext(Context);

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

  const handleRegister = async (e) => {
    e.preventDefault();

      const response = await axios.post('http://localhost:3000/user', {
        username: username,
        password: password
      })

      if (username.length < 3) {
        setError('Your name needs at least 3 characters');
      } else if (password !== confirmpassword) {
        setError('Passwords do not match');
      } else if (password.length <= 8) {
        setError('Your password must be longer than 8 characters');
      } else {
        setError('');
        setShowMessage(true);
      }

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setMsg(response.data.msg);
        setShowMessage(true);
      }

      if (response.status === 200) {
        setTimeout(() => {
          navigate('/login')
        }, 3000);
      }
      
  };

  return (
    <div>
      <Header/>
      <header className='flex justify-center items-center pt-28'>
        <img className='w-48' src={logo} alt='logo' />
      </header>
      <form
        autoComplete='off'
        className='flex justify-center items-center flex-col mt-12 gap-16 font-primary text-base'
        onSubmit={handleRegister}
      >
        {showMessage &&(
          <Popup />
        )}
        <div>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            htmlFor='user'
            placeholder='User'
            type='text'
            name='user'
            id='user'
          />
        </div>
        <div>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            htmlFor='password'
            placeholder='Password'
            type='password'
            name='password'
            id='password'
          />
        </div>
        <div>
          <Input
            onChange={(e) => setConfirmpassword(e.target.value)}
            htmlFor='confirmpassword'
            placeholder='Confirm password'
            type='password'
            name='confirmpassword'
            id='password'
          />
        </div>
        <Button Children='Register' />
        <Link to='/Login'>
          <a className='text-primary underline '>
            Have an account?
          </a>
        </Link>
      </form>
      <div className='mt-32'>
      <Footer/>
      </div>
    </div>
  );
};

export default Register;
