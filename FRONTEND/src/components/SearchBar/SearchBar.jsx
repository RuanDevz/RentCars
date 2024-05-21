import React from 'react';
import Location from '../../assets/Search/location.png';
import calendar from '../../assets/Search/calendar.png';
import Button from '../Button/Button';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar-container mb-32 z-50 '>
      <div className='flex flex-col justify-center gap-36 text-center  lg:max-w-7xl lg:flex-row items-center lg:mx-auto rounded top p-5'>
        <div className="search-bar-item flex gap-4 ">
          <img className='w-10' src={Location} alt="location" />
          <div>
            <h1>Location</h1>
            <p  className='text-gray-500'>Choose your Location</p>
          </div>
        </div>
        <div className="search-bar-item flex gap-4">
          <img className='w-10' src={calendar} alt="calendar" />
          <div>
            <h1>Pickup Date</h1>
            <p className='text-gray-500'>Tue 15 Feb, 09:00</p>
          </div>
        </div>
        <div className="search-bar-item flex gap-4">
          <img className='w-10' src={calendar} alt="calendar" />
          <div>
            <h1>Return Date</h1>
            <p className='text-gray-500'>Thu 16 Feb, 11:00</p>
          </div>
        </div>
        <Button Children='Search'/>
      </div>
    </div>
  );
}

export default SearchBar;