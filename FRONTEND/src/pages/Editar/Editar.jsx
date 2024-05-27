import React, { useContext } from 'react';

import car from '../../assets/Images/Car.png';

import HeaderLogged from '../../components/ComponentLogado/HeaderLogged/HeaderLogged';
import Footer from '../../components/Footer/Footer';
import FormEditCars from '../../components/ComponentLogado/Formcars/FormEditCars';

const Editar = () => {
    return (
        <div>
            <HeaderLogged/>
            <div className='flex justify-center mx-auto mt-10 p-5 lg:mt-20 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-14 bg-blue-100 rounded mb-10 max-w-64'>
                <h1 className='text-2xl text-primary'>Editar seu carro</h1>
            </div>
            <main className='flex justify-between flex-row-reverse'>
                <section>
                <img data-aos="zoom-in" className='mt-28' src={car} alt="Car" />
                </section>
                <section className='ml-20 absolute top-0 left-0 mt-32'>
                    <FormEditCars/>
                </section>
            </main>
            <div className='mt-64'>
            <Footer/>
            </div>
        </div>
    );
};

export default Editar;
