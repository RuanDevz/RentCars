import React, { useContext } from 'react'
import Cars from '../../Cars/Cars'
import Footer from '../../Footer/Footer'
import HeaderLogged from '../HeaderLogged/HeaderLogged'
import Context from '../../../useContext/Context'

const DashboardLooged = () => {

  const {userdata, myid} = useContext(Context)

    sessionStorage.setItem("id", myid);

  return (
    <div>
      <HeaderLogged />
      <Cars/>  
      <Footer/>
    </div>
  )
}

export default DashboardLooged
