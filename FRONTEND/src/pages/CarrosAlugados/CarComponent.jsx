import React from 'react'
import Passageiro from './Images/user.png';
import Marcha from './Images/Marcha.png';
import Arcondicionado from './Images/Frozen.png';
import Portas from './Images/Portas.png';

const CarComponent = ({car, index}) => {
  return (
    <div>
        <div className='max-w-64 font-primary rounded-lg shadow-2xl p-4 mb-4' key={index}>
                            <img className='pb-5 w-80' src={car.img} alt={car.name} />
                            <h1 className='font-medium text-lg'>{car.name}</h1>
                            <div className='flex items-center pb-4'>
                                <span>{car.nota}</span>
                                <p className='text-xs text-gray-500'>({car.reviews} reviews)</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className='flex py-1 pb-6'>
                                    <img src={Passageiro} alt="Passageiro" />
                                    <p className='text-xs text-gray-500'>{car.passageiros} Passagers</p>
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
                                <p><strong>R${car.price}</strong> <span className='text-gray-500'>/day</span></p>
                            </div>
                        </div>
    </div>
  )
}

export default CarComponent