import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../../useContext/Context';
import HeaderLogged from '../HeaderLogged/HeaderLogged';
import Footer from '../../Footer/Footer';
import Passageiro from './Images/Passageiro.png';
import Portas from './Images/Portas.png';
import Marcha from './Images/Marcha.png';
import Arcondicionado from './Images/Arcondicionado.png';
import LoadingComponent from '../../LoadingComponent/LoadingComponent';
import { useNavigate } from 'react-router-dom';

const MeusCarros = () => {
  
  const navigate = useNavigate();
  const { myid, setLoading, loading, mycars, setMycars } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://rent-cars-jdua.vercel.app/user/${myid}/cars`)
      .then((response) => {
        setMycars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the cars!", error);
        setLoading(false);
      });
  }, [myid, setLoading, setMycars]);

  const Deletecar = async (carId) => {
    try {
      const response = await axios.delete(`https://rent-cars-jdua.vercel.app/car/${myid}/cars/${carId}`);
      console.log(response.data.msg);
      setMycars(mycars.filter(car => car.id !== carId));
    } catch (error) {
      console.error("Erro ao deletar car", error);
    }
  };

  return (
    <div>
      <HeaderLogged />
      <main>
        <section className='flex justify-center items-center'>
          <p className='text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10 w-64 text-center whitespace-nowrap'>
            MEUS CARROS
          </p>
        </section>
        <section className='flex justify-around gap-10 mx-auto flex-wrap max-w-screen-xl'>
          {loading ? (
            <div className='flex flex-col justify-center items-center h-screen'>
              <LoadingComponent />
              <p className='text-2xl font-primary text-primary font-medium mt-10'>Buscando carros...</p>
            </div>
          ) : (
            mycars.length > 0 ? (
              mycars.map((car) => (
                <div key={car.id} className='max-w-64 font-primary rounded-lg shadow-2xl p-4 mb-4'>
                  <img className='pb-5 w-80' src={car.img} alt={car.name} />
                  <h1 className='font-medium text-lg'>{car.name}</h1>
                  <div className='flex gap-2 flex-wrap items-end gap-5 border-b border-gray-300'>
                    <div className='flex py-1'>
                      <img src={Passageiro} alt="Passageiro" />
                      <p className='text-xs text-gray-500'>{car.passageiros} Passageiros</p>
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
                      <p className='text-xs text-gray-500'>{car.portas} Portas</p>
                    </div>
                  </div>
                  <div className='flex justify-between pt-5 font-primary'>
                    <p>Preço</p>
                    <p><strong>${car.price}</strong> <span className='text-gray-500'>/dia</span></p>
                  </div>
                  <div className='flex justify-around items-center mt-6 font-primary'>
                    <button onClick={() => navigate('/DashboardLooged/Meuscarros/editar')} className='bg-blue-600 text-white rounded p-3'>Editar</button>
                    <button onClick={() => Deletecar(car.id)} className='bg-red-600 text-white rounded p-3'>Remover</button>
                  </div>
                </div>
              ))
            ) : (
              <div className='bg-red-100 my-20'>
                <p className='text-2xl font-bold text-center text-red-600 py-5 px-5 rounded-xl'>Nenhum carro encontrado.</p>
              </div>
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MeusCarros;
