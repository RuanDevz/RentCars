import React, { useContext, useState, useEffect } from 'react';
import logo from '../../assets/Images/Logo.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Context from '../../useContext/Context';
import Popup from '../../components/Popup/Popup';
import Car from '../../assets/Images/Carcomplete.png';
import '../Register/Carwidth.css';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const { showMessage, setShowMessage, error, setError, msg, setMsg, accessToken, setAccessToken, userdata, setUserdata, Loading, setLoading } = useContext(Context);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  const handlelogin = async (e) => {
    e.preventDefault();

    if (username.length <= 0) {
      setError('Digite seu usuario');
       return setShowMessage(true); 
    } else if (password.length <= 0) {
      setError('Digite sua senha');
      return setShowMessage(true); 
    }

    

    try {
      const response = await axios.post('http://localhost:3000/user/auth', {
        username: username,
        password: password
      });
      console.log(response.data);
      setAccessToken(response.data.accessToken);
      setUserdata(response.data.user.username);
      setLoading(false);
      navigate('/DashboardLooged');
    } catch (error) {
      setError("Credenciais Invalidas!");
      setShowMessage(true);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("user", userdata);
  }, [accessToken, userdata]);

  return (
    <div>
      {Loading ? (
        <div className='flex justify-center items-center h-screen	'>
          <LoadingComponent/>
        </div>
      ) : (
        <>
          <Header/>
          {showMessage && <Popup />}
          <form autoComplete='off' className='flex flex-row-reverse justify-around items-center lg:ml-96 gap-52' onSubmit={handlelogin}>
            <div className='hidden lg:block'>
              <img className='carwidth' src={Car} alt="car" />
            </div>
            <div className='flex justify-center items-center flex-col mt-12 gap-16 font-primary text-base'>
              <header className='flex justify-center items-center pt-7 pb-12'>
                <img className='w-48' src={logo} alt="logo" />
              </header>
              <div>
                <Input onChange={(e) => setUsername(e.target.value)} htmlFor='user' placeholder='User' type='text' name='user' id='user'/>
              </div>
              <div>
                <Input onChange={(e) => setPassword(e.target.value)} htmlFor='password' placeholder='Password' type='password' name='password' id='password'/>
              </div>
              <Button onClick={handlelogin} Children='Login'/>
              <Link to='/Register'>
                <a className='text-primary underline' href="">Don´t have a account ?</a>
              </Link>
            </div>
          </form>
          <div className='mt-32'>
            <Footer/>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
