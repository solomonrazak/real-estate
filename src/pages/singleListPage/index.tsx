import { useParams } from "@tanstack/react-router";
import React from "react";
import Slider from "../../components/slider/Slider";
import { singlePostData } from "../../lib/dummydata";
import { CiLocationOn } from "react-icons/ci";
import { userData } from "../../lib/dummydata";

const data = singlePostData;


const SingleListPage: React.FC = () => {

  const { listId } = useParams({from: "/list/$listId"});
  console.log({listId})  

  return (
    <div className="flex w-full h-full min-h-full">
        <div className="w-[60%] pr-5">
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
        <div className="w-[40%] bg-[#fcf5f3] h-[100vh]">
            <div><p>General</p></div>
            <div><p>Room Sizes</p></div>
            <div><p>Nearby Places</p></div>
            <div><p>Location</p></div>
        </div>

    </div>
  )
};

export default SingleListPage;
