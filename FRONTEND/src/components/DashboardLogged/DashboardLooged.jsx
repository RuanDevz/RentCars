import React from 'react'
import Cars from '../Cars/Cars'
import Footer from '../Footer/Footer'
import HeaderLogged from '../HeaderLogged/HeaderLogged'
import Work from '../Work/Work'
import Brands from '../Brands/Brands'
import Details from '../Details/Details'
import Depoiments from '../Depoiments/Depoiments'
import Download from '../Download/Download'

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
