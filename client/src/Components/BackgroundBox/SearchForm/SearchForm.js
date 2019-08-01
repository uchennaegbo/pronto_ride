import React from 'react';
import './SearchForm.css';
import { FaSearchLocation, FaLocationArrow } from 'react-icons/fa';
import SearchInputs from './SearchInputs';

const SearchForm = () => {
  return (
    <form className="home-search-form">
      <SearchInputs
        type="text"
        title="search"
        name="location"
        id="from"
        placeholder="From"
        icon={<FaSearchLocation className="icon icon-search-vector" />}
      />
      <SearchInputs
        type="text"
        title="search"
        name="destination"
        id="to"
        placeholder="To"
        icon={<FaLocationArrow className="icon icon-search-vector" />}
      />
      <button className="btn btn-balanced">Find A Ride</button>
    </form>
  );
};

export default SearchForm;
