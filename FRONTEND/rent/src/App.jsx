import React, { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from './components/Dahboard/Dashboard'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

const App = () => {

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if(isMobile){
      AOS.init({ duration: "500", offset: 300});
    }else{
      AOS.init({ duration: "500", offset: 400});
    }

  }, []);
  
  return (
    <Router>
    <div className='overflow-x-hidden'>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Register' element={<Register/>} />
      <Route path='Login' element={<Login/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
