import React, { useContext, useEffect, useState } from 'react';
import Jaguar from './Images/Jaguar.png';
import Audi from './Images/Audi.png';
import BMW from './Images/BMW.png';
import Lamborghini from './Images/Lamborghini.png';
import Passageiro from './Images/user.png';
import Marcha from './Images/Marcha.png';
import Arcondicionado from './Images/Frozen.png';
import Portas from './Images/Portas.png';
import Star from './Images/Star.png';
import Button from '../Button/Button';
import Arrow from './Images/Arrow.png';
import axios from 'axios';
import Context from '../../useContext/Context';
import Popup from '../Popup/Popup';
import { useNavigate, useParams } from 'react-router-dom';

const Cars = () => {

    const navigate = useNavigate();
    const { accessToken, setError, setShowMessage, showMessage, setCarid } = useContext(Context);
    const { cars, setCars } = useContext(Context);
    let {carId} = useParams()

    const [getidcar, setGetidcar] = useState(null)

    const {setCardetails,cardetails} = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rent-cars-jdua.vercel.app/car');
                setCars(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, [setCars]);

    const rentCar = async (carId) => {
        try {
            if (!accessToken || accessToken.trim() === '') {
                setError("Você precisa estar logado para alugar");
                setShowMessage(true);
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            };

            const response = await axios.get('https://rent-cars-jdua.vercel.app/user/dashboard/user', config);
            console.log("Usuário está logado. Pode alugar.");

            
            const carResponse = await axios.get(`https://rent-cars-jdua.vercel.app/car/${carId}`);
            setCardetails(carResponse.data);
            setGetidcar(carResponse.data.id)
            


            
            navigate(`/Cardetails/${carId}`);

        } catch (err) {
            console.log("Ocorreu um erro ao verificar a autenticação:", err);
        }
    };

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
                        <div className='max-w-64 font-primary rounded-lg shadow-2xl p-4 mb-4' key={index}>
                            <img className='pb-5 w-80' src={car.img} alt={car.name} />
                            <h1 className='font-medium text-lg'>{car.name}</h1>
                            <div className='flex items-center pb-4'>
                                <img src={Star} alt="Star" />
                                <span>{car.nota}</span>
                                <p className='text-xs text-gray-500'>({car.reviews} reviews)</p>
                            </div>
                            <div className='flex gap-2 flex-wrap items-end gap-5 border-b border-gray-300'>
                                <div className='flex py-1'>
                                    <img src={Passageiro} alt="Passageiro" />
                                    <p className='text-xs text-gray-500'>{car.passageiros} Passagers</p>
                                </div>
                                <div className='flex gap-2 py-1'>
                                    <img src={Marcha} alt="Marcha" />
                                    <p className='text-xs text-gray-500'>{car.marcha}</p>
                                </div>
                                <div className='flex gap-2 py-1 pb-6'>
                                    <img src={Arcondicionado} alt="Arcondicionado" />
                                    <p className='text-xs text-gray-500'>{car.arcondicionado}</p>
                                </div>
                                <div className='flex gap-2 py-1 pb-6'>
                                    <img src={Portas} alt="Portas" />
                                    <p className='text-xs text-gray-500'>{car.portas} Doors</p>
                                </div>
                            </div>
                            <div className='flex justify-between pt-5 font-primary'>
                                <p>Price</p>
                                <p><strong>R${car.price}</strong> <span className='text-gray-500'>/day</span></p>
                            </div>
                            <div className='flex justify-center items-center mt-6'>
                                <Button onClick={() => rentCar(car.id)} Children='Rent Now' />
                            </div>
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
