'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsArrowLeft } from 'react-icons/bs';
import countryData from './../json/data.json';

 function ProjectPage() {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function listOutDetails(l) {
    let string = "";

    if (l != null && l != undefined) {
      for (var x = 0; x < l.length; x++) {
        string += l[x].name + " ";
      }
    }
  
    return string;
  } 

  // State variables
  const [loading, setLoading] = useState(true);
  const [pageCountry, setPageCountry] = useState([]);
  const pathname = usePathname()

  // Select the country for page view
  const findCountry = (code) => {
    var s =  countryData.filter(function(c) {
      return c.alpha3Code == code;
    });

    return s[0];
  }

  const findCountryName = (code) => {
    var s =  countryData.filter(function(c) {
      return c.alpha3Code == code;
    });

    console.log(s[0])

    return s[0].name;
  }

  const setUpPage = () => {
    // setPageCountry(findCountry(searchParams.alpha2Code));
    setPageCountry(findCountry(pathname.slice(1)));
    setLoading(false);
  }

  useEffect(() => {
    setUpPage();
  }, []);

  if (!loading) {
    return (
      <main className="flex flex-col w-full min-h-screen p-10 items-start justify-start bg-gray md:px-20 2xl:px-44">

        <div className="flex flex-row items-start justify-start pb-20">
          <Link
            href={{
              pathname: `/` ,
            }}
            class="flex items-center justify-center py-2 px-8 shadow-md rounded-sm bg-white dark:bg-darkBlue">
            <BsArrowLeft />
            <h1 className="flex pl-1 font-nunitoSansLight text-sm text-veryDarkBlue-Light dark:text-white">Back</h1>
          </Link>
        </div>

        <div className="flex flex-col w-full lg:items-center lg:grid lg:grid-cols-2 lg:gap-20">
          <div 
            className="flex flex-row h-80 mb-10 w-full bg-no-repeat bg-cover bg-center lg:h-96 2xl:h-[28rem]"
            style={{backgroundImage: `url(${pageCountry.flag})`}}>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row pb-3 md:pb-5">
              <h1 className="text-3xl font-nunitoSansExtraBold text-veryDarkBlue-Light dark:text-white">{pageCountry.name}</h1>
            </div>
            <div className="flex flex-col w-full text-veryDarkBlue-Light dark:text-white md:grid md:grid-cols-2 md:gap-5">
              <div className="flex flex-col py-5 md:py-0">
                <p className="py-1 text-md font-nunitoSansSemiBold">Native Name: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{pageCountry.nativeName}</span></p>
                <p className="py-1 text-md font-nunitoSansSemiBold">Population: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{numberWithCommas(pageCountry.population)}</span></p>
                <p className="py-1 text-md font-nunitoSansSemiBold">Region: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{pageCountry.region}</span></p>
                <p className="py-1 text-md font-nunitoSansSemiBold">Sub Region: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{pageCountry.subregion}</span></p>
                {pageCountry.capital ? 
                  <p className="py-1 text-md font-nunitoSansSemiBold">Capital: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{pageCountry.capital}</span></p>
                : <></>}
              </div>
              <div className="flex flex-col py-5 md:py-0">
                {pageCountry.topLevelDomain ? 
                  <p className="py-1 text-md font-nunitoSansSemiBold">Top Level Domain: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{pageCountry.topLevelDomain[0]}</span></p>
                : <></>}
                {pageCountry.currencies ? 
                  <p className="py-1 text-md font-nunitoSansSemiBold">Currencies: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{listOutDetails(pageCountry.currencies)}</span></p>
                : <></>}
                {pageCountry.languages ? 
                  <p className="py-1 text-md font-nunitoSansSemiBold">Currencies: <span className="font-nunitoSansLight text-darkGray dark:text-veryLightGray">{listOutDetails(pageCountry.languages)}</span></p>
                : <></>}
              </div>
            </div>

            {pageCountry.borders ? 
              <div className="flex flex-col items-center pt-3 md:pt-5 md:flex-row md:flex-wrap">
                <p className="py-1 text-md font-nunitoSansSemiBold">Border Countries: </p>
                <div className="flex flex-row flex-wrap py-2">
                  {pageCountry.borders.map((b) => (
                    <Link
                      href={{
                        pathname: `/${b}` ,
                      }}
                      class="flex items-center justify-center mx-2 my-1 px-8 py-1 shadow-md rounded-sm bg-white dark:bg-darkBlue">
                      
                      <h1 className="flex font-nunitoSansLight text-sm text-veryDarkBlue-Light dark:text-white">{findCountryName(b)}</h1>
                    </Link>
                  )) }
                </div>
              </div>
            : <></>}
          </div>
        </div>
      </main>
    )
  }
}

export default ProjectPage;