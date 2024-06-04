
import { useContext, useEffect, useState } from 'react';
import Popup from '../Popup/Popup';
import Carsdetails from './Carsdetails';
import Context from '../../useContext/Context';
import axios from 'axios';

const Cars = () => {


    const {showMessage,cars, setCars} = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rent-cars-jdua.vercel.app/car');
                setCars(response.data)

            
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, [setCars]);




    return (
        <div>
            <main data-aos="zoom-in" className='mt-60'>
                {showMessage && <Popup />}
                <section className='flex flex-col mx-auto items-center py-5'>
                    <p className='text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10 w-64 text-center whitespace-nowrap'>POPULAR RENTAL DEALS</p>
                    <h1 className='text-center lg:font-primary font-medium text-4xl max-w-xl pb-20'>Most popular cars rental deals</h1>
                </section>
                <section className='flex flex-col justify-center items-center lg:flex lg:justify-between lg:flex-row flex-wrap max-w-6xl mx-auto pb-52'>
                    {cars.map((car, index) => (
                        <div key={index}>
                            <Carsdetails car={car} index={index}/>
                        </div>
                    ))}
                </section>
                <div className='flex justify-center items-center border border-gray-300 border-3 max-w-56 mx-auto p-3 rounded-md mb-20'>
                    <button className='font-medium text-base'>Show all vehicles</button>
                </div>
            </main>
        </div>
    );
};

export default Cars;
