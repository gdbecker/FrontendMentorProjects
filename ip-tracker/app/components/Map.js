import React from 'react';
import PNGLocation from '../../public/icon-location.png';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: PNGLocation.src,
    iconRetinaUrl: PNGLocation.src,
    shadowUrl: markerShadow.src,
    iconSize: [45,55],
    popupAnchor: [10, -40]
})

function Map({ lat, lng }) {

  return (
    <MapContainer 
      center={[lat, lng]} 
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
      <Marker position={[lat, lng]} >
        <Popup>24 hours coding area 👨‍💻 </Popup>
      </Marker>

    </MapContainer>
  )
}

export default Map;