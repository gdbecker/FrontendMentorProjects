'use client'
import React, { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { BiSearch } from 'react-icons/bi'
import countryData from './json/data.json';

 function Home() {

  // State variables
  const [countrySearch, setCountrySearch] = useState('');
  const [regionSelect, setRegionSelect] = useState('');
  const [regions, setRegions] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Update country to search
  const onChangeCountrySearch = (e) => {
    setCountrySearch(e.currentTarget.value);

    filterCountryNames(e.currentTarget.value)
  }

  // Update region to filter
  const handleRegionChange = (event) => {
    setRegionSelect(event.target.value);
  };

  const filterCountryNames = (countryName) => {
    var f =  countryData.filter(function(c) {
      return c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
    });

    setFilteredCountries(f);
  }

  const grabRegions = () => {
    const allRegions = countryData.map(c => c.region);
    setRegions([...new Set(allRegions)].sort());
  }

  useEffect(() => {
    setFilteredCountries(countryData);
    grabRegions();
  }, []);

  return (
    <main className="flex flex-col z-0 w-full h-full p-10 items-center justify-center md:items-center md:px-20 2xl:px-36">

      <div className="flex flex-col w-full py-5 items-center justify-between md:flex-row">
        <div className="flex flex-row w-full items-center justify-between pl-5 shadow-md rounded-md bg-white dark:bg-darkBlue">
          <h1 className="font-nunitoSansExtraBold text-darkGray"><BiSearch /></h1>
          <input 
            className="flex w-full p-5 bg-white text-veryDarkBlue-Light text-xs font-nunitoSansSemiBold rounded-md focus:outline-none dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country..."
            id="countrySearch" 
            type="text" 
            value={countrySearch}
            onChange={e => onChangeCountrySearch(e)}
          />
           <select value={value} onChange={handleRegionChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        
      </div>

      
      <div className="flex flex-col w-full pt-5 pb-10 gap-14 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map(function(c) {
          return (
            <ProjectCard 
              alpha2Code={c.alpha2Code}
              img_url={c.flag}
              name={c.name}
              population={c.population}
              region={c.region}
              capital={c.capital}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Home;
