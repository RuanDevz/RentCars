import React, { useContext, useEffect, useState } from 'react';
import Passageiro from './Images/user.png';
import Marcha from './Images/Marcha.png';
import Arcondicionado from './Images/Frozen.png';
import Portas from './Images/Portas.png';
import Button from '../../components/Button/Button';
import Nota from './Images/Star.png'
import Context from '../../useContext/Context';
import Popup from '../../components/Popup/Popup';
import { useNavigate } from 'react-router-dom';

const CarComponent = ({ car }) => {
    const navigate = useNavigate();
    const [zoom, setZoom] = useState(0.8);
    const { showMessage, setShowMessage, msg, setMsg, setRentcars } = useContext(Context);
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

    const Devolution = () => {
        setMsg('Carro devolvido com sucesso!');
        setShowMessage(true);
        window.scrollTo({ top: 0 });
    
        setTimeout(() => {
            setRentcars(prevRentcars => prevRentcars.filter(item => item !== car)); 
        }, 3000);
    };

    return (
       <div className='flex justify-center'>
         <div style={{zoom: zoom}} className='font-primary rounded-lg shadow-2xl p-4 pb-10 mb-10 m-2'>
            {showMessage && <Popup/>}
            <img className='pb-5 w-80' src={car.img} alt={car.name} />
            <h1 className='font-medium text-lg'>{car.name}</h1>
            <div className='flex items-center pb-4'>
            <div className='flex items-center pb-4'>
                    <img src={Nota} alt="Star" />
                    <span>{car.nota}</span>
                <p className='text-xs ml-2 text-gray-500'>({car.reviews} reviews)</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex py-1 pb-6 items-center'>
                    <img src={Passageiro} alt="Passageiro" />
                    <p className='text-xs text-gray-500'>{car.passageiros} Passengers</p>
                </div>
                <div className='flex gap-2 py-1 pb-6 items-center'>
                    <img src={Marcha} alt="Marcha" />
                    <p className='text-xs text-gray-500'>{car.marcha}</p>
                </div>
                <div className='flex gap-2 py-1 pb-6 items-center'>
                    <img src={Arcondicionado} alt="Arcondicionado" />
                    <p className='text-xs text-gray-500'>{car.arcondicionado}</p>
                </div>
                <div className='flex gap-2 py-1 pb-6 items-center'>
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
                <Button onClick={Devolution} Children='CONFIRMAR DEVOLUÇÃO'/>
            </div>
        </div>
       </div>
    );
};

export default CarComponent;
