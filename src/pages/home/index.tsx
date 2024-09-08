import React from "react";
import bg from "../../assets/images/bg.png";
import SearchBar from "../../components/searchbar";

interface Ihome {}

const Home: React.FC = () => {
  return (
    <div className="flex h-full">
      <div className="w-full md:w-[60%] h-full flex flex-col gap-11 px-6 justify-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-normal">
          Lets Find You A Real Estate & Discover Your Perfect Home with Us
        </h1>
        <p>
          Explore a wide range of properties that match your style and budget.
          Let us help you find a place where comfort meets convenience, and
          every corner feels like home.
        </p>
        <SearchBar />
      <div className="flex justify-between font-medium">
      <div>
        <h1 className="md:text-2xl">16+</h1>
        <p>Years of Experience</p>
      </div>
      <div>
        <h1 className="md:text-2xl">200</h1>
        <p>Awards Gained</p>
      </div>
      <div>
        <h1 className="md:text-2xl">2000+</h1>
        <p>Properties ready to be sold</p>
      </div>
      </div>
      </div>
      
      <div className="hidden w-[40%] bg-[#fcf5f3] h-full relative md:flex items-center">
        <img src={bg} alt="bg" className="absolute right-0" />
      </div>
     
     
    </div>
  );
};

export default Home;
