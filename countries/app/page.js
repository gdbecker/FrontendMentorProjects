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

  // Filter by country name
  // const filterCountryNames = (countryName) => {
  //   var f =  countryData.filter(function(c) {
  //     return c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
  //   });

  //   setFilteredCountries(f);
  // }

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

  // Filter by region
  // const filterCountryRegions = (region) => {
  //   if (region != "Filter by Region") {
  //     var f =  countryData.filter(function(c) {
  //       return c.region == region;
  //     });

  //     setFilteredCountries(f);
  //   } else {
  //     setFilteredCountries(countryData);
  //   }
  // }

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
        <div className="flex flex-row w-full items-center justify-between pl-5 shadow-md rounded-md bg-white dark:bg-darkBlue md:w-[40%]">
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
        {/* <select 
          value={regionSelect} 
          onChange={(e) => handleRegionChange(e)}
          className="text-xs font-nunitoSansSemiBold focus:outline-none">
          <option 
            value="Filter by Region"
            className="py-5">
          Filter by Region</option>
          {regions.map((r) => (
            <option 
              value={r.country}
              className="!p-16">
            {r.country}</option>
          ))}
        </select> */}
        <details className="flex dropdown w-[60%] my-10 md:my-0 md:w-[28%] lg:w-[20%] xl:w-[15%]">
          <summary className="flex flex-row items-center justify-between mb-[2px] btn w-full rounded-md border-0 shadow-md no-animation bg-white text-veryDarkBlue-Light hover:bg-white dark:bg-darkBlue dark:text-white dark:hover:dark:bg-darkBlue">
            <h1 
              className="flex normal-case text-xs font-nunitoSansSemiBold"
            >{regionSelect}</h1>
            <BiChevronDown className="text-sm"/>
          </summary>
          <ul 
            className="flex px-2 py-4 shadow menu dropdown-content z-[1] rounded-md w-full bg-white text-veryDarkBlue-Light hover: dark:bg-darkBlue dark:text-white"
            
            >
            {regions.map((r) => (
              <li
                onClick={(e) => handleRegionChange(e)}
                className="text-xs font-nunitoSansSemiBold"
              >
                <a 
                  className="px-4 py-1 rounded-none hover:bg-white dark:hover:dark:bg-darkBlue dark:hover:text-white"
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
            <ProjectCard 
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
