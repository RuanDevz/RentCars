import React, { useContext, useState, useEffect } from 'react';

import car from '../../assets/Images/Car.png';

import HeaderLogged from '../../components/ComponentLogado/HeaderLogged/HeaderLogged';
import Footer from '../../components/Footer/Footer';
import FormEditCars from '../../components/ComponentLogado/Formcars/FormEditCars';
import Context from '../../useContext/Context';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import axios from 'axios'
import Popup from '../../components/Popup/Popup';
import './Editar.css'
import DefaultTitle from '../../components/DefaultTitle/DefaultTitle';
import Formeditar from './Formeditar';

const Editar = () => {
  const [zoom, setZoom] = useState(0.8)

  const {showMessage} = useContext(Context)
    return (
        <div style={{zoom: zoom}}>
            <HeaderLogged/>
            <DefaultTitle>Editar o seu carro</DefaultTitle>
            <main className='flex justify-between flex-col items-center lg:flex-row-reverse'>
                <section>
                <img className='w-car-width' src={car} alt="Car" />
                {showMessage && <Popup/>}
                </section>
                <section className='ml-20lg:relative top-0 left-0 mt-32'>
                <div>
                  <Formeditar />
                </div>
                </section>
            </main>
            <div className='mt-64'>
            <Footer/>
            </div>
        </div>
    );
};

export default Editar;
