'use client';
import React, { useState, useEffect } from 'react';
import LoadingPage from './loading';
import PNGLocation from '../public/icon-location.png';
import { BiChevronRight } from 'react-icons/bi';
import dynamic from "next/dynamic"

// Set up Leaflet maps and map marker
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from 'leaflet';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconUrl: PNGLocation.src,
//     iconRetinaUrl: PNGLocation.src,
//     shadowUrl: markerShadow.src,
//     iconSize: [45,55],
//     popupAnchor: [10, -40]
// })

const MapComponent = dynamic(() => import('./components/Map'), {
  loading: () => 'Loading...',
  ssr: false,
})

function Home() {

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [seed, setSeed] = useState(1); // Controls re-render of just the map
  const [ipSearch, setIPSearch] = useState('');
  const [data, setData] = useState({
    idpAddress: '',
    location: '',
    lat: '',
    lng: '',
    timezone: '',
    isp: ''
  });

  // Update IP Address to search
  const onChangeIPAddress = (e) => {
    setIPSearch(e.currentTarget.value);
  }

  const fetchNewData = async () => {

    const API_KEY = "at_WGi1atAenbIjfq6QgqTt2DjpPrEgP"
    var response = "";

    if (ipSearch != '') {
      response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipSearch}`);
    } else {
      const clientResponse = await fetch(
        'https://api.ipify.org?format=json'
      )
      const clientData = await clientResponse.json();
      response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${clientData.ip}`);
    }

    const data = await response.json();
    console.log(data);

    setData({
      ipAddress: data.ip,
      location: data.location.city + ", " + data.location.region + " " + data.location.postalCode,
      lat: data.location.lat,
      lng: data.location.lng,
      timezone: "UTC" + data.location.timezone,
      isp: data.isp
    });

    setSeed(Math.random()); // Controls re-render of just the map

    setIPSearch('');

    setIsLoading(false);
  }

  // Prep app for viewing
  useEffect(() => {
    fetchNewData();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isLoading) {
    return (
      <main className="min-h-screen bg-offWhite">
        <div className="flex h-80 md:h-64 items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('../../public/pattern-bg-mobile.png')] md:bg-[url('../../public/pattern-bg-desktop.png')]">
          <div className="relative w-full z-10 md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[60%]">
            <div className="absolute flex-col -top-32 px-8 w-full text-center items-center justify-center md:-top-24">
              <div className="flex flex-row w-full items-center justify-center">
                <h1 className="text-offWhite text-3xl font-rubikMedium lg:text-3xl">IP Address Tracker</h1>
              </div>
              <div className="flex flex-row w-full h-full mt-7 justify-center md:px-44 lg:px-60 2xl:px-80">
                <input 
                  className="flex w-full pl-7 bg-offWhite text-veryDarkGray font-rubikRegular rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none focus:outline-none" 
                  id="ipAddress" 
                  type="text" 
                  placeholder="Search for any IP address or domain"
                  value={ipSearch}
                  onChange={e => onChangeIPAddress(e)}
                  required
                />
                <button
                  className="p-3 bg-veryDarkGray text-offWhite text-3xl rounded-tr-xl rounded-br-xl hover:bg-darkGray"
                  onClick={() => fetchNewData()}>
                  <BiChevronRight />
                </button>
              </div>
              <div className="flex flex-row py-7 mt-9 bg-offWhite rounded-xl justify-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-7">
                  <div className="flex flex-col px-7 text-center md:text-left">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">IP ADDRESS</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">{data.ipAddress}</h2>
                  </div>
                  <div className="flex flex-col px-7 text-center md:text-left md:border-l-[1px] md:border-darkGray">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">LOCATION</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">{data.location}</h2>
                  </div>
                  <div className="flex flex-col px-7 text-center md:text-left md:border-l-[1px] md:border-darkGray">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">TIMEZONE</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">{data.timezone}</h2>
                  </div>
                  <div className="flex flex-col px-7 text-center md:text-left md:border-l-[1px] md:border-darkGray">
                    <h1 className="text-[0.6rem] text-darkGray font-rubikBold tracking-[0.08rem]">ISP</h1>
                    <h2 className="mt-2 text-xl text-veryDarkGray font-rubikMedium">{data.isp}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </div>
        {/* <MapContainer 
          center={[43.38621, -79.83713]} 
          zoom="13" 
          scrollWheelZoom={false}
          className="flex min-h-screen z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
          <Marker position={[43.38621, -79.83713]} >
            <Popup>24 hours coding area 👨‍💻 </Popup>
          </Marker>

        </MapContainer> */}

        <MapComponent
          lat={data.lat}
          lng={data.lng}
          seed={seed}
        />  
        
      </main>
    )
  }
  
}

export default Home;