import React from "react";
import { Marker, Popup } from "react-leaflet";
import { ListItem } from "../../lib/dummydata";
import { Link } from "@tanstack/react-router";

interface IPinProps {
  item: ListItem;
}
const Pin: React.FC<IPinProps> = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-2 w-[14rem] font-medium">
          <img
            src={item.img}
            alt=""
            width={120}
            height={120}
            className="object-cover"
          />
          <div>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <p className="flex flex-col gap-1 font-medium">
              <span className="">{item.bedroom} Bedrooms</span>
              <span>${item.price}</span>
            </p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
