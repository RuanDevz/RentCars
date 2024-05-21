import React, { useState } from 'react';
import logo from '../../assets/Images/Logo.png';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3000/user',{
      username: username,
      password: password
    }).then((response) =>{
      console.log(response.data)
    })

    if (username.length < 3) {
      setError('Your name needs at least 3 characters');
    } else if (password !== confirmpassword) {
      setError('Passwords do not match');
    } else if (password.length <= 8) {
      setError('Your password must be longer than 8 characters');
    }else{
      setError('')
    }
  };

  return (
    <div>
      <header className='flex justify-center items-center pt-28'>
        <img className='w-48' src={logo} alt='logo' />
      </header>
      <form
        autoComplete='off'
        className='flex justify-center items-center flex-col mt-12 gap-16 font-primary text-base'
        onSubmit={handleRegister}
      >
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
        <Button onClick={handleRegister} Children='Register' />
        {error && (
          <p className='text-base text-red-600 text-center font-primary font-medium'>
            {error}
          </p>
        )}
        <Link to='/Login'>
          <a className=' text-primary underline' href=''>
            Have an account?
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Register;
