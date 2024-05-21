import React, { useEffect, useState } from 'react';
import logo from '../../assets/Images/Logo.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [menuActive, setMenuActive] = useState(true);
  const isMobile = window.innerWidth <= 768;

  useEffect(() =>{
    if(isMobile){
      setMenuActive(false)
    }else{
      setMenuActive(true)
    }
  },[])

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className='justify-between lg:flex space-x-3 lg:justify-around gap-96 items-center pt-6 mx-auto'>
      {menuActive && (
          <nav className=' z-40  absolute h-full  lg:flex lg:justify-center lg:items-center lg:h-auto'>
            <ul data-aos="fade-right" className=' bg-white h-full   pl-5 lg:flex gap-20 lg:h-auto'>
            <div className='flex items-center justify-center lg:hidden'>
            <img className='py-2 px-10' src={logo} alt="logo" />
            </div>
              <li className='cursor-pointer my-10 hover:text-primary relative'>
                <span>Become a renter</span>
              </li>
              <li className='cursor-pointer my-10 hover:text-primary relative'>
                <span>Rental deals</span>
              </li>
              <li className='cursor-pointer my-10 hover:text-primary relative'>
                <span>How it works</span>
              </li>
              <li className='cursor-pointer my-10 hover:text-primary relative'>
                <span>Why Choose us</span>
              </li>
              <li className='flex justify-center flex-col gap-7 lg:hidden'>
          <Link to='/login'><Button Children='Sign in'/></Link>
          <Link to='/register'><Button Children='Sign up'/></Link>
              </li>
            </ul>
          </nav>
        )}
        <div className='flex items-center justify-between'>
          <img className='py-2 px-10' src={logo} alt="logo" />
          {menuActive ? (
            <IoClose className='text-3xl z-50 cursor-pointer text-primary mr-10 lg:hidden' onClick={toggleMenu} />
          ) : (
            <IoMenu className='text-3xl z-50 cursor-pointer text-primary mr-10 lg:hidden' onClick={toggleMenu} />
          )}
        </div>
        <div className='hidden lg:flex gap-5 font-primary text-base'>
          <Link to='Sign in'><button className='lg:block mt-2'>Sign in</button></Link>
          <Link to='/register'><Button Children='Sign up'/></Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
