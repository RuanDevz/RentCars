import React, { useContext } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Popup from '../../components/Popup/Popup';
import '../Register/Carwidth.css';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import LoginForm from './LoginForm';
import Context from '../../useContext/Context';

const Login = () => {

  const {Loading, showMessage} = useContext(Context)

  return (
    <div>
      {Loading ? (
        <div className='flex justify-center items-center flex-col h-screen	'>
          <LoadingComponent/>
          <p className='text-center text-primary font-primary font-medium text-2xl mt-4'>Aguarde...</p>
        </div>
      ) : (
        <>
          <Header/>
          {showMessage && <Popup />}
          <LoginForm/>
          <div className='mt-32'>
            <Footer/>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
