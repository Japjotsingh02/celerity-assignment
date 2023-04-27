import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiShipLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <form className="flex items-center justify-center rounded-xl bg-white my-16 mx-16 px-4 py-1 rounded space-x-5">
      <CiLocationOn className="text-8xl text-gray-500" />
      <input
        type="text"
        className=" block w-full font-semibold text-black outline-none"
        placeholder="Origin, Port, City"
      />
      <CiLocationOn className="text-8xl text-gray-500" />
      <input
        type="text"
        className=" block w-full font-semibold text-black outline-none border-r-2"
        placeholder="Destination, Port, City"
      />
      <MdOutlineCalendarMonth className="text-8xl text-gray-400" />
      <input
        type="text"
        className=" block w-full font-semibold text-black outline-none border-r-2"
        placeholder="13 April 2023"
      />
      <RiShipLine className="text-8xl text-gray-400" />
      <input
        type="text"
        className=" block w-full font-semibold text-black outline-none border-r-2"
        placeholder="Load"
      />
      <button
        type="submit"
        className="bg-[#9747ff] rounded-lg text-white font-semibold p-2 mt-1 rounded"
      >
        <BsArrowRight />
      </button>
    </form>
  );
};

export default SearchBar;
