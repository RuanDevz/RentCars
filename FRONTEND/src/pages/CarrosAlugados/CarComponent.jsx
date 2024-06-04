import React, { useEffect, useState } from 'react';
import Passageiro from './Images/user.png';
import Marcha from './Images/Marcha.png';
import Arcondicionado from './Images/Frozen.png';
import Portas from './Images/Portas.png';
import Button from '../../components/Button/Button';

const CarComponent = ({ car }) => {



    useEffect(() =>{
        
    },[])


    const [devolutionTime, setDevolutionTime] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    const parseDate = (dateString) => {
        return new Date(dateString);
    };

    useEffect(() => {
        const pickdate = parseDate(car.pickDate);
        const returndate = parseDate(car.returnDate);
        
        const calculateTotalPrice = () => {
            const timeDifference = returndate.getTime() - pickdate.getTime();
            const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
            const pricePerDay = parseFloat(car.price);
            const total = days * pricePerDay;
            setTotalPrice(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

            setDevolutionTime(`${days} dias`);
        };
        
        calculateTotalPrice();
    }, [car.pickDate, car.returnDate, car.price]);

    return (
        <div className='font-primary rounded-lg shadow-2xl p-4 pb-10 mb-10 m-2 w-88'>
            <img className='pb-5 w-80' src={car.img} alt={car.name} />
            <h1 className='font-medium text-lg'>{car.name}</h1>
            <div className='flex items-center pb-4'>
                <span>{car.nota}</span>
                <p className='text-xs text-gray-500'>({car.reviews} reviews)</p>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex py-1 pb-6'>
                    <img src={Passageiro} alt="Passageiro" />
                    <p className='text-xs text-gray-500'>{car.passageiros} Passengers</p>
                </div>
                <div className='flex gap-2 py-1 pb-6'>
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
                <p><strong>R${car.price},00</strong> <span className='text-gray-500'>/day</span></p>
            </div>
            <div className='flex justify-between pt-5 font-primary'>
                <p>Total:</p>
                <p><strong>{totalPrice}</strong> <span className='text-gray-500'>/total</span></p>
            </div>
            <div className='flex justify-between pt-5 font-primary'>
                <p>Localização</p>
                <p><strong>{car.location}</strong></p>
            </div>
            <div className='flex justify-between pt-5 font-primary'>
                <p>Data de retirada</p>
                <p><strong>{car.pickDate}</strong></p>
            </div>
            <div className='flex justify-between pt-5 font-primary'>
                <p>Data de retorno</p>
                <p><strong>{car.returnDate}</strong></p>
            </div>
            <div className='flex justify-between pt-5 font-primary'>
                <p>Tempo de alugado</p>
                <p><strong>{devolutionTime}</strong></p>
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Button Children='CONFIRMAR DEVOLUÇÃO'/>
            </div>
        </div>
    );
};

export default CarComponent;
 