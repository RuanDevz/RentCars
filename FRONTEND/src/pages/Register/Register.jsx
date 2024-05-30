import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Context from '../../useContext/Context';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import '../Register/Carwidth.css';
import RegisterForm from './RegisterForm';

const Register = () => {
  const { Loading } = useContext(Context);

  return (
    <div>
      {Loading ? (
        <div className='flex flex-col justify-center items-center h-screen'>
          <LoadingComponent />
          <p className='text-2xl font-primary text-primary font-medium mt-10'>Criando usuário...</p>
        </div>
      ) : (
        <>
          <Header />
          <RegisterForm />
        </>
      )}
    </div>
  );
};

export default Register;
