import React from "react";
import { BiMessageAltMinus } from "react-icons/bi";
import Cards from "./Cards";

const Services = () => {
  return (
    <>
      <h1 className="mt-24 font-[600] text-[30px] text-center">Services</h1>
      <div className="flex justify-around my-10 mx-5">
        <Cards />
      </div>
      <div className="p-4 right-16 absolute top-[49rem] bg-[#9747ff] w-fit rounded-full">
        <BiMessageAltMinus className="text-white text-2xl" />
      </div>
    </>
  );
};

export default Services;
