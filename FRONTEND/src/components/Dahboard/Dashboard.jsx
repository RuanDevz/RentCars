import React from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Work from '../Work/Work'
import Brands from '../Brands/Brands'
import Details from '../Details/Details'
import Cars from '../Cars/Cars'
import Depoiments from '../Depoiments/Depoiments'
import Download from '../Download/Download'
import Footer from '../Footer/Footer'

const Dashboard = () => {
  return (
    <div>
       <Header />
      <Home />
      <Work />
      <Brands />
      <Details />
      <Cars />
      <Depoiments />
      <Download />
      <Footer />
    </div>
  )
}

export default Dashboard