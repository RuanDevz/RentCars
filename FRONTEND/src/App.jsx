import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Dashboard from './components/Dahboard/Dashboard';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import DashboardLooged from './components/ComponentLogado/DashboardLogged/DashboardLooged';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Context from './useContext/Context';
import AdicionarCarros from './components/ComponentLogado/AdicionarCarros/AdicionarCarros';
import Meuscarros from './components/ComponentLogado/MeusCarros/MeusCarros';
import Editar from './pages/Editar/Editar';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [menuActive, setMenuActive] = useState(true);
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken') || '');
  const [userdata, setUserdata] = useState(sessionStorage.getItem('user') || '');
  const [myid, setmyId] = useState(sessionStorage.getItem('id') || '');
  const [cars, setCars] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [mycars, setMycars] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      AOS.init({ duration: "500", offset: 300 });
    } else {
      AOS.init({ duration: "500", offset: 400 });
    }
  }, []);

  return (
    <Context.Provider value={{
      showMessage, setShowMessage,
      error, setError,
      msg, setMsg,
      menuActive, setMenuActive,
      accessToken, setAccessToken,
      userdata, setUserdata,
      cars, setCars,
      Loading, setLoading,
      myid, setmyId,
      mycars, setMycars
    }}>
      <Router>
        <div className='overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/DashboardLooged' element={<DashboardLooged />} />
            <Route path='/DashboardLooged/Adicionarcarros' element={<AdicionarCarros />} />
            <Route path='/DashboardLooged/Meuscarros' element={<Meuscarros />} />
            <Route path='/DashboardLooged/Meuscarros/editar' element={<Editar />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
