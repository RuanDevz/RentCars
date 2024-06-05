import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/Images/Logo.png';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';
import Context from '../../useContext/Context';
import CarImage from '../../assets/Images/Carcomplete.png'
import '../Register/Carwidth.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const { showMessage, setShowMessage, error, setError, msg, setMsg, setLoading, Loading } = useContext(Context);

  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
        setError('');
        setMsg('');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage, setError, setMsg, setShowMessage]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (username.length < 5) {
      setError('Seu nome precisa ter pelo menos 5 caracteres');
    } else if (password !== confirmpassword) {
      setError('As senhas não combinam');
    } else if (password.length <= 8) {
      setError('Sua senha precisa ter 8 ou mais caracteres');
    } else {
      setLoading(true);
      try {
        const response = await axios.post('https://rent-cars-jdua.vercel.app/user', {
          username: username,
          password: password
        });

        setLoading(false);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          navigate('/login');
          setMsg(response.data.msg);
        }
      } catch (error) {
        setError('Ocorreu um erro no servidor');
        setShowMessage(true);
      }
    }

    setShowMessage(true);
  };

  return (
    <div>
      <form autoComplete='off' className='flex flex-col lg:flex-row-reverse items-center justify-between lg:ml-96 lg:w-auto' onSubmit={handleRegister}>
        <div className='hidden lg:block mb-8'>
          <img className='w-carwidth' src={CarImage} alt='car' />
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
          <Button onClick={handleRegister} >Register</Button>
          <Link to='/login' className='text-primary underline'>
            Have an account?
          </Link>
        </div>
      </form>
      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterForm;
