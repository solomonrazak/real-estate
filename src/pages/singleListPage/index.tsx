import { useParams } from "@tanstack/react-router";
import React from "react";
import Slider from "../../components/slider/Slider";
import { singlePostData } from "../../lib/dummydata";
import { CiLocationOn } from "react-icons/ci";
import { userData } from "../../lib/dummydata";
import { VscTools } from "react-icons/vsc";
import { MdOutlinePets } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { LuSquareDashedBottom } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";
import { TbBusStop } from "react-icons/tb";
import { MdTableRestaurant } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BsSave2 } from "react-icons/bs";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummydata";

const data = singlePostData;





const SingleListPage: React.FC = () => {

  const { listId } = useParams({from: "/list/$listId"});
  console.log({listId})  

  return (
    <div className="flex flex-col lg:flex-row w-full h-full min-h-full">
        <div className="w-full lg:w-[60%] pr-5">
            <Slider images={data.images}/>
            <div className="mt-6 w-full xl:pr-7">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between gap-1">
                        <h1 className="font-medium text-[24px]">{data.title}</h1>
                        <div className="flex items-center">
                            <CiLocationOn />
                            <p>{data.address}</p>
                        </div>
                        <div className="bg-yellow-100 px-2 py-1 w-14"><p className="text-center">${data.price}</p></div>
                        
                    </div>
                    <div className="w-28 h-24 bg-yellow-100 flex flex-col items-center gap-2 justify-around py-3 rounded-md">

                        <img src={userData.img} width={50} height={50} alt="" className="rounded-full w-9 h-9"/>
                        <p className="font-medium">{userData.name}</p>
                    </div>
                </div>
                <div className="mt-10">{data.description}</div>
            </div>
        </div>
        <div className="w-full lg:w-[40%] bg-[#fcf5f3] h-full px-5 flex-flex-col space-y-5 pb-10 mt-8 lg:mt-0 pt-5 lg:py-0">
            <div>
                <p className="mb-5 font-medium">General</p>
                <div className="bg-white rounded-t-md">
                    <div className="flex items-center gap-2 py-2 pl-3">
                    <VscTools className="text-[20px]"/>
                      <p className="flex flex-col">
                        <span className="font-medium">Utilities</span>
                        <span className="text-[12px] mt-[-3px]">Render is responsible</span>
                      </p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="flex items-center gap-2 py-2 pl-3">
                    <MdOutlinePets className="text-[20px]"/>
                      <p className="flex flex-col">
                        <span className="font-medium">Pet Policy</span>
                        <span className="text-[12px] mt-[-3px]">Pets allowed</span>
                      </p>
                    </div>
                </div>
                <div className="bg-white rounded-b-md">
                    <div className="flex items-center gap-2 py-2 pl-3">
                    <BsHouses className="text-[20px]"/>
                      <p className="flex flex-col">
                        <span className="font-medium">Property Fees</span>
                        <span className="text-[12px] mt-[-3px]">must have 3x the house rent as income</span>
                      </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-medium mb-5">Room Sizes</p>
                <div className="flex w-full justify-between">
                    <div  className="bg-white flex items-center gap-2 py-2 px-2 rounded-sm">
                    <LuSquareDashedBottom className="hidden lg:block"/>
                    <p className="xl:flex"><span>80kps</span><span className="lg:hidden">(hrhrh)</span></p>
                    </div>
                    <div  className="bg-white flex items-center gap-2 py-2 px-2 rounded-sm">
                    <IoBedOutline className="hidden lg:block"/>
                    <p>2 bedroom</p>
                    </div>
                    <div  className="bg-white flex items-center gap-2 py-2 px-2 rounded-sm">
                    <LuBath className="hidden lg:block"/>
                    <p>1 bathroom</p>
                    </div>
                </div>

            </div>
            <div>
                <p className="font-medium mb-5">Nearby Places</p>
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 w-full">
                    <div className="flex bg-white items-center gap-5 lg:gap-2 pl-2 py-2 pr-9 rounded-l-sm">
                    <FaSchool className="text-[22px]"/>
                    <p className="flex flex-col">
                        <span className="font-medium">School</span>
                        <span className="text-[13px] mt-[-3px]">250m away</span>
                    </p>

                    </div>
                    <div className="flex bg-white items-center gap-5 lg:gap-3 pl-2 py-2 pr-9">
                    <TbBusStop className="text-[22px]"/>
                    <p className="flex flex-col">
                        <span className="font-medium">Bus Stop</span>
                        <span className="text-[13px] mt-[-3px]">100m away</span>
                    </p>

                    </div>
                    <div className="flex bg-white items-center gap-3 lg:gap-3 pl-2 py-2 pr-9 rounded-r-sm">
                    <MdTableRestaurant className="text-[22px]"/>
                    <p className="flex flex-col">
                        <span className="font-medium">Restaurant</span>
                        <span className="text-[13px] mt-[-3px]">200m away</span>
                    </p>

                    </div>
                </div>
            </div>
            <div className="">
                <p className="mb-5 font-medium">Location</p>
                <div className="w-full h-56 bg-[#fcf5f3]">
                <Map items={listData}/>
                </div>
                
            </div>
            <div className="flex justify-between pt-3">
                <button className="flex items-center gap-2 bg-white border border-yellow-300 rounded-md p-2"><FaRegMessage className="mt-1"/>Send A Message</button>
                <button className="flex items-center gap-2 bg-white border border-yellow-300 rounded-md p-2"><BsSave2 className="mt-1"/>Save Property</button>
            </div>
        </div>

    </div>
  )
};

export default SingleListPage;
