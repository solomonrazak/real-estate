import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { ListItem } from "../../lib/dummydata";
import Pin from "../pin/Pin";

interface MapProps {
    items: ListItem[]
}


const position: [number, number] = [51.505, -0.09];
const Map: React.FC<MapProps> = ({items}) => {
  return (
    
      <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="w-[100%] h-[100%] rounded-md">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {items.map((item) => (
        <Pin item={item} key={item.id}/>
       ))}
      </MapContainer>
   
  );
};

export default Map;
