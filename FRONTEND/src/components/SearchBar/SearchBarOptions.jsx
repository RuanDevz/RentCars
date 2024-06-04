import React, { useContext, useEffect, useState } from 'react';
import Location from '../../assets/Search/location.png';
import calendar from '../../assets/Search/calendar.png';
import Button from '../Button/Button';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import Context from '../../useContext/Context';
import Popup from '../Popup/Popup';
import axios from 'axios';

const SearchBarOptions = () => {
    const navigate = useNavigate();
    const [pickDateVisible, setPickDateVisible] = useState(false);
    const [returnDateVisible, setReturnDateVisible] = useState(false);
    const [pickSelectedDate, setPickSelectedDate] = useState('');
    const [returnSelectedDate, setReturnSelectedDate] = useState('');
    const [chooselocation, setChooselocation] = useState(false);
    const [selectedchooselocation, setSelectedchooselocation] = useState('');
    

    const { setRentcars,rentcars, cardetails,error, setError,showMessage, setShowMessage,myid } = useContext(Context);
    const toggleRentcar = async () => {
        
        console.log(rentcars)


        if(rentcars > 1){
            setShowMessage(true)
            setError("Você só pode alugar um carro")
            return
        }

        if (pickSelectedDate === '' || returnSelectedDate === '' || selectedchooselocation === '') {
            setError('Preencha todos os campos!')
            setShowMessage(true)
        } else {
            navigate('/DashboardLooged/Carrosalugados');
    
            const newRentCar = {
                ...cardetails,
                pickDate: pickSelectedDate,
                returnDate: returnSelectedDate,
                location: selectedchooselocation,
            };
            setRentcars(prevRentcars => [...prevRentcars, newRentCar]);

            await axios.post(`https://rent-cars-jdua.vercel.app/cars/${myid}/rentcar`, newRentCar)
            .then((response) =>{
                console.log(response.data)
            })
        }
    };

    const togglePickDate = () => {
        setPickDateVisible(!pickDateVisible);
        setReturnDateVisible(false);
    };

    const handlePickDateChange = (e) => {
        setPickSelectedDate(e.target.value);
        setPickDateVisible(false);
    };

    const toggleReturnDate = () => {
        setReturnDateVisible(!returnDateVisible);
        setPickDateVisible(false);
    };

    const handleReturnDateChange = (e) => {
        setReturnSelectedDate(e.target.value);
        setReturnDateVisible(false);
    };

    const toggleLocalization = () => {
        setChooselocation(!chooselocation);
        setReturnDateVisible(false);
        setPickDateVisible(false);
    };

    const handleLocalizationChange = (e) => {
        setSelectedchooselocation(e.target.value);
        setChooselocation(false);
        setReturnDateVisible(false);
        setPickDateVisible(false);
    };

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const today = getTodayDate();

    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const formattedTime = `${hours}h ${minutes}m ${seconds}s`;

    return (
        <div className='search-bar-container mb-32 mt-32 z-50 whitespace-nowrap'>
            <div className='flex flex-col justify-center gap-36 text-center lg:max-w-7xl lg:flex-row items-center lg:mx-auto rounded top p-5'>
                {showMessage && <Popup/>}
                <div className="search-bar-item flex items-center gap-4 relative">
                    <div>
                        <img onClick={toggleLocalization} className='w-10 cursor-pointer' src={Location} alt="location" />
                        {chooselocation && (
                            <div className='absolute top-12 left-0 bg-white border rounded shadow p-4'>
                                <select className='w-full' onChange={handleLocalizationChange} value={selectedchooselocation}>
                                    <option selected disabled value="">Selecione uma cidade</option>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Belo Horizonte">Belo Horizonte</option>
                                    <option value="Brasília">Brasília</option>
                                    <option value="Salvador">Salvador</option>
                                    <option value="Curitiba">Curitiba</option>
                                    <option value="Fortaleza">Fortaleza</option>
                                    <option value="Manaus">Manaus</option>
                                    <option value="Recife">Recife</option>
                                    <option value="Porto Alegre">Porto Alegre</option>
                                </select>
                            </div>
                        )}
                    </div>
                    <div>
                        <h1>Localização</h1>
                        <p className='text-gray-500'>{selectedchooselocation || 'Sua localização'}</p>
                    </div>
                </div>
                <div className="search-bar-item flex items-center gap-4 relative">
                    <div>
                        <img onClick={togglePickDate} className='w-10 cursor-pointer' src={calendar} alt="calendar" />
                        {pickDateVisible && (
                            <div className='absolute top-12 left-0 bg-white border rounded shadow p-4'>
                                <input className='w-full' type="date" name="pickDate" id="pickDate" onChange={handlePickDateChange} min={today} />
                            </div>
                        )}
                    </div>
                    <div>
                        <h1>Data da retirada</h1>
                        <p className='text-gray-500'>{pickSelectedDate || 'Data de retirada'}</p>
                    </div>
                </div>
                <div className="search-bar-item flex items-center gap-4 relative">
                    <div>
                        <img onClick={toggleReturnDate} className='w-10 cursor-pointer' src={calendar} alt="calendar" />
                        {returnDateVisible && (
                            <div className='absolute top-12 left-0 bg-white border rounded shadow p-4'>
                                <input className='w-full' type="date" name="returnDate" id="returnDate" onChange={handleReturnDateChange} min={today} />
                            </div>
                        )}
                    </div>
                    <div>
                        <h1>Data de retorno</h1>
                        <p className='text-gray-500'>{returnSelectedDate || 'Data de retorno'}</p>
                    </div>
                </div>
                <Button onClick={toggleRentcar} Children='Search' />
            </div>
        </div>
    );
};

export default SearchBarOptions;
