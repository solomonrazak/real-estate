import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { ListItem } from "../../lib/dummydata";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiTempHigh } from "react-icons/ci";
import { Link } from "@tanstack/react-router";

interface CardProps {
  item: ListItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="flex w-full justify-between mb-5 pr-5 mt-5">
      <div className="flex gap-5">
        
        <img src={item.img} width={200} height={200} className="hidden md:flex rounded-md" />
       
        <div className="flex flex-col justify-between">
          <Link to={`/${item.id}`}>
          <p className="font-medium">Apartment {item.title}</p>
          </Link>
          <div className="flex items-center">
            <p>{item.address}</p>
            <CiLocationOn />
          </div>

          <div className="px-1 bg-yellow-200 w-12 flex justify-center">
            <p className="text-center">${item.price}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-gray-100 px-1">
              <IoBedOutline />
              <p>{item.bedroom}bedroom</p>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 px-1">
              <LuBath />
              <p>{item.bathroom}bathroom</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end gap-5">
        <div className="border p-2 rounded-md border-gray-400 ">
          <IoIosNotificationsOutline />
        </div>
        <div className="border p-2 rounded-md border-gray-400">
          <CiTempHigh />
        </div>
      </div>
    </div>
  );
};

export default Card;
