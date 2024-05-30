import React, { useContext, useEffect, useState } from 'react'
import HeaderLogged from '../HeaderLogged/HeaderLogged'
import CarAudi from '../../CarAudi/CarAudi'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import Footer from '../../Footer/Footer'
import axios from 'axios'
import Context from '../../../useContext/Context'
import Popup from '../../Popup/Popup'
import FormAddCars from '../Formcars/FormAddCars'
import DefaultTitle from '../../DefaultTitle/DefaultTitle'

const AdicionarCarros = () => {
    const [zoom, setZoom] = useState(0.9);
    const {showMessage} = useContext(Context)

    return (
        <div style={{zoom: zoom}}>
            <HeaderLogged />
            {showMessage && <Popup />}
            <main className='font-primary lg:flex justify-between'>
                <section>
                    <DefaultTitle>Alugue o seu carro</DefaultTitle>
                    <CarAudi/>
                </section>
                <section className='flex justify-center items-center mt-10 lg:mr-28'>
                   <FormAddCars/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AdicionarCarros
