import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Context from '../../useContext/Context';
import HeaderLogged from '../../components/ComponentLogado/HeaderLogged/HeaderLogged';
import Footer from '../../components/Footer/Footer';
import Arcondicionado from './Images/Frozen.png';
import Portas from './Images/Portas.png';
import Marcha from './Images/Marcha.png';
import passageiros from './Images/user.png';
import { FaArrowLeft } from "react-icons/fa";
import SearchBarOptions from '../../components/SearchBar/SearchBarOptions';

const Cardetails = () => {
    const { carId } = useParams();
    
    const { loading, setLoading,cardetails,setCardetails,nameuser } = useContext(Context);
    const navigate = useNavigate();
    const [zoom, setZoom] = useState(0.9);
    const [searchbar, setSearchbar] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`https://rent-cars-jdua.vercel.app/car/${carId}`);
                setCardetails(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do carro:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [carId, setLoading]);

    if (loading || !cardetails) {
        return (
            <div className='flex justify-center flex-col items-center h-screen'>
                <LoadingComponent />
                <p className='text-2xl font-primary text-primary font-medium mt-10'>Carregando dados...</p>
            </div>
        );
    }

    const toggleSearchBar = () => {
        setSearchbar(!searchbar);
    }

    return (
        <div style={{ zoom: zoom }}>
            <HeaderLogged />
            <main className='lg:flex max-w-screen-2xl mx-auto py-28 shadow-lg bg-blue-50 mt-10'>
                <FaArrowLeft onClick={() => navigate('/DashboardLooged')} className='text-4xl text-primary absolute left-0 top-0 mt-32 cursor-pointer ml-10 mb-96' />
                <section className=''>
                    <img className='w-car-width' src={cardetails.img} alt={cardetails.name} />
                </section>
                <section className='max-w-3xl mx-auto lg:max-w-screen-sm flex flex-col justify-start items-center'>
                    <div className='pb-10'>
                        <h1 className='text-2xl mt-10 lg:text-2xl lg:mt-0 font-primary font-medium text-primary bg-blue-200 p-5 rounded'>{cardetails.name}</h1>
                    </div>
                    <div className='text-center mr-20 lg:flex justify-center items-center lg:text-justify mx-auto ml-20 mt-5'>
                        <p className='text-5xl text-segundary'>{nameuser}</p>
                    </div>
                    <div className='text-2xl'>
                        <div className='lg:grid grid-cols-2 grid-flow-row mt-10'>
                            <div className='w-48 flex justify-around mx-20 my-6 bg-blue-200 p-5 rounded'>
                                <img className='w-6' src={Arcondicionado} alt="Arcondicionado" />
                                <p>{cardetails.arcondicionado}</p>
                            </div>
                            <div className='w-48 flex justify-around mx-20 my-6 bg-blue-200 p-5 rounded'>
                                <img className='w-6' src={Portas} alt="Portas" />
                                <p>{cardetails.portas}</p>
                            </div>
                            <div className='w-48 flex justify-around mx-20 my-6 bg-blue-200 p-5 rounded'>
                                <img className='w-6' src={passageiros} alt="passageiros" />
                                <p>{cardetails.passageiros}</p>
                            </div>
                            <div className='w-48 flex justify-around mx-20 my-6 bg-blue-200 p-5 rounded'>
                                <img className='w-6' src={Marcha} alt="Marcha" />
                                <p>{cardetails.marcha}</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-10 text-3xl font-medium border-4 border-segundary rounded py-3'>
                            <p>Preço da diária: R$ {cardetails.price}</p>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={toggleSearchBar} className='py-5 px-32 rounded text-white font-primary bg-primary font-medium mt-20 hover:bg-hovercolor'>Rent Now</button>
                        </div>
                        {searchbar && (
                            <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
                                <div className='bg-white p-10 rounded-lg shadow-lg flex items-center justify-center'>
                                    <SearchBarOptions />
                                    <div className='relative flex justify-center items-center'>
                                    <button onClick={toggleSearchBar} className='hidden relative mb-bottom right-20 lg:mt-4 llg:block lg:relative lg:top-0 lg:mb-96 text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600'>
                                        Close
                                    </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Cardetails;
