import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";

interface ISearchBar {} 

const SearchBar: React.FC = () => {

  const [activeButton, setActiveButton] = useState<string>("buy");

  const handleBuyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveButton("buy")
  }

  const handleRentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveButton("rent");

  }
  return (
    <div>
      <div>
        <button className={`py-1 px-4 rounded-tl-sm ${activeButton === "buy" ? "bg-black border border-black text-white" : "bg-gray-100 border border-gray-400 text-gray-700"}`} onClick={handleBuyClick}>Buy</button>
        <button className={`py-1 px-4 rounded-tr-sm ${activeButton === "rent" ? "bg-black border border-black text-white" : "bg-gray-100 text-gray-700 border border-gray-400"}`} onClick={handleRentClick}>Rent</button>
      </div>
      <div className="mt-2 md:mt-0 md:border border-gray-400 md:mr-4">
        <form className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <input type="text" name="location" placeholder="City Location" className="w-full p-2 outline-none border md:border-0 border-gray-400"/>
          <input type="number" min={0} max={100000} name="minPrice" placeholder="Min Price" className="w-full p-2 outline-none border md:border-0 border-gray-400"/>
          <input type="number" min={0} max={100000} name="maxPrice" placeholder="Max Price" className="w-full py-2 pl-2 pr-4 outline-none border md:border-0 border-gray-400"/>
          <button className="bg-yellow-500 px-4 justify-center p-3 flex"><FaSearch className="text-white"/></button>
        </form>
      </div>

    </div>
  )
}

export default SearchBar;