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

const AdicionarCarros = () => {
    const [zoom, setZoom] = useState(0.9);
    const {showMessage} = useContext(Context)

    return (
        <div style={{zoom: zoom}}>
            <HeaderLogged />
            {showMessage && <Popup />}
            <main className='font-primary lg:flex justify-between'>
                <section>
                    <div className='flex justify-center mx-auto mt-10 p-5 lg:mt-20 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-14 bg-blue-100 rounded mb-10 max-w-64'>
                        <h1 className='text-2xl text-primary '>Alugue o seu carro</h1>
                    </div>
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
