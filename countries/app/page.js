'use client'
import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import { BiSearch } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import countryData from './json/data.json';

 function Home() {

  // State variables
  const [countrySearch, setCountrySearch] = useState('');
  const [regionSelect, setRegionSelect] = useState('Filter by Region');
  const [regions, setRegions] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Update country to search
  const onChangeCountrySearch = (e) => {
    setCountrySearch(e.currentTarget.value);

    filterCountries(e.currentTarget.value, regionSelect);
  }

  // Update region to filter
  const handleRegionChange = (e) => {
    setRegionSelect(e.target.name);

    filterCountries(countrySearch, e.target.name);
  };

  // Filter by country name search and region
  const filterCountries = (countryName, region) => {
    if (countryName != "" && region != "All" && region != "Filter by Region") {
      var f =  countryData.filter(function(c) {
        // return c.region == region && c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
        return c.region == region && c.name.toLowerCase().includes(countryName.toLowerCase());
      });

      setFilteredCountries(f);
    } else if (region != "All" && region != "Filter by Region") {
      var f =  countryData.filter(function(c) {
        return c.region == region;
      });

      setFilteredCountries(f);
    } else if (countryName != "") {
      var f =  countryData.filter(function(c) {
        // return c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
        return c.name.toLowerCase().includes(countryName.toLowerCase());
      });

      setFilteredCountries(f);
    } else {
      setFilteredCountries(countryData);
    }
  }

  const grabRegions = () => {
    let allRegions = countryData.map(c => c.region);
    let regionList = [...new Set(allRegions)].sort();

    regionList = regionList.map(c => {
      return({country: c});
    });

    regionList.unshift({country: "All"})

    setRegions(regionList);
  }

  useEffect(() => {
    setFilteredCountries(countryData);
    grabRegions();
  }, []);

  return (
    <main className="flex flex-col z-0 w-full h-full p-10 items-center justify-center md:items-center md:px-20 2xl:px-44">

      <div className="flex flex-col w-full py-5 justify-between md:flex-row">
        <div className="flex flex-row w-full items-center justify-between pl-5 shadow-b-md rounded-md bg-white dark:bg-darkBlue md:w-[40%]">
          <h1 className="font-nunitoSansExtraBold text-darkGray dark:text-white"><BiSearch /></h1>
          <input 
            className="flex w-full p-5 bg-white text-veryDarkBlue-Light text-xs font-nunitoSansSemiBold rounded-md focus:outline-none dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country..."
            id="countrySearch" 
            type="text" 
            value={countrySearch}
            onChange={e => onChangeCountrySearch(e)}
          />
        </div>
        <details className="dropdown inline-block w-[100%] my-10 md:my-0 md:w-[28%] lg:w-[20%] xl:w-[15%]">
            <summary className="flex flex-row items-center justify-between h-12 px-4 btn w-full rounded-md border-0 shadow-b-md list-none no-animation bg-white text-veryDarkBlue-Light hover:bg-white dark:bg-darkBlue dark:text-white dark:hover:dark:bg-darkBlue">
              <h1 className="normal-case text-xs font-nunitoSansSemiBold">
                {regionSelect}
              </h1>
              <BiChevronDown className="text-sm"/>
            </summary>
            <ul className="dropdown-content absolute z-[100] menu p-2 shadow-xl bg-white text-darkBlue rounded-md w-full mt-2 left-0 dark:bg-darkBlue dark:text-white">
              {regions.map((r, index) => (
                <li
                  key={index}
                  onClick={(e) => handleRegionChange(e)}
                  className="text-xs font-nunitoSansSemiBold"
                >
                  <a 
                    className="px-4 py-3 rounded-md hover:bg-slate-50 active:bg-slate-100 dark:hover:text-darkBlue dark:hover:bg-veryLightGray"
                    name={r.country}
                  >
                    {r.country}
                  </a>
                </li>
              ))}
            </ul>
          </details>
      </div>
      
      <div className="flex flex-col w-full pt-5 pb-10 gap-14 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map(function(c) {
          return (
            <CountryCard 
              alpha3Code={c.alpha3Code}
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
