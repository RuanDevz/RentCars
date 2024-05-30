import React, { useContext } from 'react'
import Context from '../../../useContext/Context'
import {Link} from 'react-router-dom'

const {menuactivedesktop} = useContext(Context)

const MenuDashboardDesktop = () => {
  return (
    <div>
            {menuactivedesktop && (
            <div data-aos="fade-down" className='flex flex-col justify-start items-start gap-10 bg-white shadow-2xl rounded p-7 absolute top-0 right-60 mt-28 '>
              <Link to='/DashboardLooged/Adicionarcarros'>
              <div className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
                <p className='hover:text-primary cursor-pointer font-medium'>Adicionar Carros</p>
                <IoCarSport className='text-4xl text-primary cursor-pointer'/>
              </div>
              </Link>
              <Link to='/DashboardLooged/Meuscarros'>
              <div className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
              <p className='hover:text-primary cursor-pointer font-medium'>Meus carros</p>
                <FaCar className='text-4xl text-primary cursor-pointer'/>
              </div>
              </Link>
              <Link to='/DashboardLooged/Carrosalugados'>
              <div className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
              <p className='hover:text-primary cursor-pointer font-medium'>Carros alugados</p>
                <FaCarSide className='text-4xl text-primary cursor-pointer'/>
              </div>
              </Link>
                <div onClick={exit} className='flex justify-center items-center flex-row-reverse gap-7 ml-3 relative left-0'>
                <p className='hover:text-primary cursor-pointer font-medium'>Sair</p>
                <IoExitOutline className='text-4xl text-primary cursor-pointer'/>
                </div>
            </div>
        )}
    </div>
  )
}

export default MenuDashboardDesktop
