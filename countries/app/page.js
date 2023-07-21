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

    filterCountries(e.currentTarget.value, regionSelect);
  }

  // Update region to filter
  const handleRegionChange = (e) => {
    setRegionSelect(e.target.value);

    filterCountries(countrySearch, e.target.value);
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
    if (countryName != "" && region != "Filter by Region") {
      var f =  countryData.filter(function(c) {
        return c.region == region && c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
      });

      setFilteredCountries(f);
    } else if (region != "Filter by Region") {
      var f =  countryData.filter(function(c) {
        return c.region == region;
      });

      setFilteredCountries(f);
    } else if (countryName != "") {
      var f =  countryData.filter(function(c) {
        return c.name.slice(0, countryName.length).toLowerCase() == countryName.toLowerCase();
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

    setRegions(regionList);
  }

  useEffect(() => {
    setFilteredCountries(countryData);
    grabRegions();
  }, []);

  return (
    <main className="flex flex-col z-0 w-full h-full p-10 items-center justify-center md:items-center md:px-20 2xl:px-44">

      <div className="flex flex-col w-full py-5 items-center justify-between md:flex-row">
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
        <select 
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
        </select>
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
