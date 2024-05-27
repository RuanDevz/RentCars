import React, { useState } from 'react';
import Location from '../../assets/Search/location.png';
import calendar from '../../assets/Search/calendar.png';
import Button from '../Button/Button';
import './SearchBar.css';

const SearchBar = () => {
  const [pickDateVisible, setPickDateVisible] = useState(false);
  const [returnDateVisible, setReturnDateVisible] = useState(false);
  const [pickSelectedDate, setPickSelectedDate] = useState('');
  const [returnSelectedDate, setReturnSelectedDate] = useState('');
  const [chooselocation, setChooselocation] = useState(false)
  const [selectedchooselocation, setSelectedchooselocation] = useState('')


  const togglePickDate = () => {
    setPickDateVisible(!pickDateVisible);
    setReturnDateVisible(false); 
  };

  const toggleReturnDate = () => {
    setReturnDateVisible(!returnDateVisible);
    setPickDateVisible(false); 
  };

  const handlePickDateChange = (e) => {
    setPickSelectedDate(e.target.value);
    setPickDateVisible(false); 
  };

  const handleReturnDateChange = (e) => {
    setReturnSelectedDate(e.target.value);
    setReturnDateVisible(false);
  };


  return (
    <div className='search-bar-container mb-32 z-50 mt-64'>
      <div className='flex flex-col justify-center gap-36 text-center lg:max-w-7xl lg:flex-row items-center lg:mx-auto rounded top p-5'>
        <div className="search-bar-item flex gap-4">
          <div>
          <img className='w-10' src={Location} alt="location" />
          </div>
          <div>
            <h1>Localização</h1>
            <p className='text-gray-500'>Sua localização</p>
          </div>
          {chooselocation &&(
            <>
            <div>
              <select name="" id="" disabled="disabled">
                <option value=""></option>
              </select>
            </div>
            </>
          )}
        </div>
        <div className="search-bar-item flex gap-4 relative">
          <div>
            <img onClick={togglePickDate} className='w-10 cursor-pointer' src={calendar} alt="calendar" />
            {pickDateVisible && (
              <div className='absolute top-12 left-0 bg-white border rounded shadow p-4'>
                <input className='w-full' type="date" name="date" id="date" onChange={handlePickDateChange} />
              </div>
            )}
          </div>
          <div>
            <h1>Data da retirada</h1>
            <p className='text-gray-500'>data de retirada</p>
          </div>
        </div>
        <div className="search-bar-item flex gap-4">
          <div>
          <img onClick={toggleReturnDate} className='w-10 cursor-pointer' src={calendar} alt="calendar" />
          </div>
          {returnDateVisible &&(
            <div className='absolute top-12 left-0 bg-white border rounded shadow p-4'>
            <input className='w-full' type="date" name="date" id="date" onChange={handleReturnDateChange} />
             </div>
          )}
          <div>
            <h1>Data de retorno</h1>
            <p className='text-gray-500'>data de retorno</p>
          </div>
        </div>
        <Button Children='Search' />
      </div>
    </div>
  );
};

export default SearchBar;
