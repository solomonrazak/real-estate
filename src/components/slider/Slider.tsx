import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface ISlider {
  images: string[];
}

const Slider: React.FC<ISlider> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlider = (direction: any) => {
    if (imageIndex === null) return;
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };


  return (
    <div className="w-full">
      {imageIndex !== null && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black w-full flex items-center gap-5 px-3">
          <div>
            <MdArrowBackIos
              className="text-white text-6xl font-medium"
              onClick={() => changeSlider("left")}
            />
          </div>
          <div className="w-full h-full rounded-md flex items-center overflow-clip">
            <img
              src={images[imageIndex]}
              className="rounded-md mt-7 h-full object-contain w-full h-full"
            />
          </div>
          <div>
            <MdOutlineArrowForwardIos
              className="text-white text-6xl"
              onClick={() => changeSlider("right")}
            />
          </div>
          <div
            className="absolute text-white text-[30px] font-medium top-0 right-4 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-[75%] h-full">
          <img
            src={images[0]}
            className="rounded-md object-cover"
            alt=""
            onClick={() => setImageIndex(0)}
          />
        </div>
        <div className="w-[25%] flex flex-col justify-between">
          {images.slice(1).map((image, index) => (
            <img
              src={image}
              key={index}
              className=" rounded-md object-cover h-[5.7rem] w-36"
              alt=""
              onClick={() => setImageIndex(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
