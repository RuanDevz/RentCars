import React from 'react';
import './SearchBar.css';
import SearchBarOptions from './SearchBarOptions';

const SearchBar = () => {

  return (
    <div className='search-bar-container z-50'>
      <SearchBarOptions/>
    </div>
  );
};

export default SearchBar;
