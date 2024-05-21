import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import Dashboard from './components/Dahboard/Dashboard'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Context from './useContext/Context'

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if(isMobile){
      AOS.init({ duration: "500", offset: 300});
    }else{
      AOS.init({ duration: "500", offset: 400});
    }

  }, []);
  
  return (
    <Context.Provider value={{
      showMessage, setShowMessage,
      error, setError
    }}>
    <Router>
    <div className='overflow-x-hidden'>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Register' element={<Register/>} />
      <Route path='Login' element={<Login/>} />
      </Routes>
    </div>
    </Router>
    </Context.Provider>
  )
}

export default App
