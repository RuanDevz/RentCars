import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/Images/Logo.png'; 
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";




import Context from '../../../useContext/Context';


const HeaderLogged = () => {
  const [menuActive, setMenuActive] = useState(true);
  const [menuactivedesktop, setMenuactivedesktop] = useState(false)
  const isMobile = window.innerWidth <= 768;

  const {userdata, accessToken} = useContext(Context)

  useEffect(() =>{
    if(isMobile){
      setMenuActive(false)
    }else{
      setMenuActive(true)
    }
  },[])

  useEffect(() => {
    sessionStorage.setItem('user', userdata);
    sessionStorage.setItem('accessToken', accessToken)
  }, [userdata,accessToken]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    setMenuactivedesktop(!menuactivedesktop)
  };

  const exit = () =>{
        sessionStorage.setItem('user', '');
        sessionStorage.setItem('accessToken', '')
        window.location.href="/"
  }

  return (
    <div>
      <header className='justify-between lg:flex space-x-3 lg:justify-around gap-96 items-center pt-6 mx-auto'>
      {menuActive && (
          <nav className=' z-40  absolute h-full  lg:flex lg:justify-center lg:items-center lg:h-auto'>
            <ul data-aos="fade-right" className=' bg-white h-full flex flex-col items-start   pl-5 lg:flex gap-20 lg:h-auto'>
            <div className='flex items-center justify-center lg:hidden'>
            <img className='py-2 px-10' src={logo} alt="logo" />
            </div>
              <li className='flex justify-end items-center flex-row-reverse gap-7 ml-3 relative left-0 lg:hidden'>
              <p className='hover:text-primary cursor-pointer font-medium'>Ruanb</p>
               <FaRegUserCircle className='text-4xl text-primary cursor-pointer'/>
              </li>
              <li className='flex justify-end items-center flex-row-reverse gap-7 ml-3 relative left-0 lg:hidden'>
                <p className='hover:text-primary cursor-pointer font-medium'>Adicionar Carros</p>
                <IoCarSport className='text-4xl text-primary cursor-pointer'/>
              </li>
              <li className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0 lg:hidden'>
              <p className='hover:text-primary cursor-pointer font-medium'>Meus carros</p>
                <FaCar className='text-4xl text-primary cursor-pointer'/>
              </li>
              <li className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0 lg:hidden'>
                <p className='hover:text-primary cursor-pointer font-medium'>Carros alugados</p>
                <FaCarSide className='text-4xl text-primary cursor-pointer'/>
              </li>
              <li onClick={exit} className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0 lg:hidden'>
                <p className='hover:text-primary cursor-pointer font-medium'>Sair</p>
                <IoExitOutline className='text-4xl text-primary cursor-pointer'/>
              </li>
            </ul>
          </nav>
        )}
        <div className='flex items-center justify-between'>
          <Link to='/'><img className='py-2 px-10' src={logo} alt="logo" /></Link>
          {menuActive ? (
            <IoClose className='text-3xl z-50 cursor-pointer text-primary mr-10 lg:hidden' onClick={toggleMenu} />
          ) : (
            <IoMenu className='text-3xl z-50 cursor-pointer text-primary mr-10 lg:hidden' onClick={toggleMenu} />
          )}
        </div>
        <div onClick={toggleMenu} className='hidden lg:flex gap-5 font-primary text-base items-center border-4 border-primary p-4 cursor-pointer'>
            <p className='hover:text-primary cursor-pointer'>{userdata}</p>
            <FaRegUserCircle className='text-4xl text-primary cursor-pointer'/>

            {menuactivedesktop && (
            <div data-aos="fade-down" className='flex flex-col justify-start items-start gap-10 bg-white shadow-2xl rounded p-7 absolute top-0 right-60 mt-28 '>
              <Link to='/DashboardLooged/Mycar'>
                            <div className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
                <p className='hover:text-primary cursor-pointer font-medium'>Adicionar Carros</p>
                <IoCarSport className='text-4xl text-primary cursor-pointer'/>
              </div>
              </Link>
              <div className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
              <p className='hover:text-primary cursor-pointer font-medium'>Meus carros</p>
                <FaCar className='text-4xl text-primary cursor-pointer'/>
              </div>
              <div className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
              <p className='hover:text-primary cursor-pointer font-medium'>Carros alugados</p>
                <FaCarSide className='text-4xl text-primary cursor-pointer'/>
              </div>
                <div onClick={exit} className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0 '>
                <p className='hover:text-primary cursor-pointer font-medium'>Sair</p>
                <IoExitOutline className='text-4xl text-primary cursor-pointer'/>
                </div>
            </div>
        )}
        </div>
      </header>
    </div>
  );
};

export default HeaderLogged;
