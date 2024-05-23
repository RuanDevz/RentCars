import React from 'react'
import Cars from '../../Cars/Cars'
import Footer from '../../Footer/Footer'
import HeaderLogged from '../HeaderLogged/HeaderLogged'

const DashboardLooged = () => {
  return (
    <div>
      <HeaderLogged />
      <Cars/>  
      <Footer/>
    </div>
  )
}

export default DashboardLooged
