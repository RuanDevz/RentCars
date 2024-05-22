import React, { useState, useEffect, useContext } from 'react';
import Logo from '../../assets/Images/Logo.png';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Context from '../../useContext/Context';
import Popup from '../../components/Popup/Popup';
import CarImage from '../../assets/Images/Carcomplete.png';
import '../Register/Carwidth.css'; // Assuming this file contains additional styles

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const { showMessage, setShowMessage, error, setError, msg, setMsg } = useContext(Context);

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
  
    if (username.length < 3) {
      setError('Your name needs at least 3 characters');
    } else if (password !== confirmpassword) {
      setError('Passwords do not match');
    } else if (password.length <= 8) {
      setError('Your password must be longer than 8 characters');
    } else {
      try {
        const response = await axios.post('http://localhost:3000/user', {
          username: username,
          password: password
        });
  
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setMsg(response.data.msg);
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        }
      } catch (error) {
        setError('An error occurred while registering');
      }
    }
  
    setShowMessage(true);
  };

  return (
    <>
      <Header />
      <form autoComplete='off' className='flex flex-col lg:flex-row-reverse items-center justify-between lg:ml-96 lg:w-auto' onSubmit={handleRegister}>
        <div className=' hidden lg:block mb-8'>
          <img className='carwidth' src={CarImage} alt='car' />
        </div>
        {showMessage && <Popup />}
        <div className='flex flex-col justify-center items-center mt-12 gap-16 font-primary text-base'>
          <img className='w-48 mb-8' src={Logo} alt='logo' />
          <div>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              htmlFor='user'
              placeholder='Username'
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
              id='confirmpassword'
            />
          </div>
          <Button Children='Register' onClick={handleRegister}></Button>
          <Link to='/login' className='text-primary underline'>
            Have an account?
          </Link>
        </div>
      </form>
      <div className='mt-32'>
        <Footer />
      </div>
    </>
  );
};

export default Register;
