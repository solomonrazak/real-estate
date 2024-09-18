import React from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="pr-6">
      <h1 className="text-[17px] text-slate-500">
        Search results for <span>London</span>
      </h1>
      {/* top */}
      <div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="city"
            className="text-[14px] font-medium text-gray-500"
          >
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="border border-gray-400 text-[13px] py-1 pl-3"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="grid grid-cols-6 w-full gap-4 mt-3">
      <div className="flex flex-col">
          <label htmlFor="type" className="text-[14px] mb-1">
            Type
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              className="appearance-none border border-gray-400 pr-8 pl-2 py-2 rounded-md text-gray-700 "
            >
              <option value="" className="hover:bg-green-300">
                any
              </option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
              
            </select>
            <div className="absolute inset-y-0 right-0 top-2 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="property" className="text-[14px] mb-1">
            Property
          </label>
          <div className="relative">
            <select
              id="property"
              name="property"
              className="appearance-none border border-gray-400 pr-8 pl-2 py-2 rounded-md text-gray-700 "
            >
              <option value="" className="hover:bg-green-300">
                any
              </option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
            <div className="absolute inset-y-0 right-0 top-2 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="minPrice" className="text-[14px] mb-1">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="py-2 border px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="maxPrice" className="text-[14px] mb-1">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="py-2 border px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bedroom" className="text-[14px] mb-1">
            Bedroom
          </label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="py-2 border px-2"
          />
        </div>
        <div className="flex items-end ">
          <button className="bg-yellow-300 flex justify-center items-center h-11 w-full">
            <FaSearch className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
