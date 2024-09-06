import React from 'react';
import { FaSearch } from "react-icons/fa";

interface ISearchBar {}

const SearchBar: React.FC = () => {
  return (
    <div>
      <div>
        <button className="py-1 px-4 bg-black text-white border border-black">Buy</button>
        <button className="py-1 px-4 bg-white text-gray-800 border-gray-400 border">Rent</button>
      </div>
      <div>
        <form>
          <input type="text" name="location" placeholder="City Location"/>
          <input type="number" min={0} max={100000} name="minPrice" placeholder="Min Price"/>
          <input type="number" min={0} max={100000} name="maxPrice" placeholder="Max Price"/>
          <button className="bg-yellow-500 p-1"><FaSearch className="text-white"/></button>
        </form>
      </div>

    </div>
  )
}

export default SearchBar;