import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";



interface ISlider {
  images: string[] 
}

const Slider: React.FC<ISlider> = ({images}) => {
  return (
    <div className="flex gap-4">
      <div className="absolute top-0 left-0 bg-black w-full h-full flex items-center gap-5 px-3">
        <div><MdArrowBackIos className="text-white text-6xl font-medium"/></div>
        <div className="w-full h-full rounded-md"><img src={images[0]} className="p-3 rounded-md mt-7 object-contain"/></div>
        <div><MdOutlineArrowForwardIos className="text-white text-6xl"/></div>
        <div className="absolute text-white text-[30px] font-medium top-0 right-4 cursor-pointer">X</div>
      </div>
      <div className="w-[75%]">
        <img src={images[0]} className="rounded-md object-cover"/>
      </div>
      <div className="w-[25%] flex flex-col justify-between">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} className=" rounded-md object-cover h-[5.7rem] w-36" alt="" />
        ))}
      </div>
    </div>
  )
}

export default Slider;