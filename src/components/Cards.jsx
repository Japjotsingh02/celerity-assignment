import React from "react";
import { RiShipLine } from "react-icons/ri";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { TiMessage } from "react-icons/ti";

function Cards() {
  return (
    <>
      <div className="bg-white w-80 h-52 rounded-xl px-5 py-6">
        <div className="flex items-center border-b-2 pb-3">
          <RiShipLine className="text-[#0075ff] text-[2rem]" />
          <span className="items-center ml-8 font-bold">Freight Servies</span>
        </div>
        <p className="pt-5">
          Open new Opportunites to grow your busniess. Enter new markets and
          discover new contitnents, We are with you, door-to-door.
        </p>
      </div>
      <div className="bg-white w-80 h-52 rounded-xl px-5 py-6">
        <div className="flex items-center border-b-2 pb-3">
          <MdOutlineBusinessCenter className="text-[#ff4747] text-[2rem]" />
          <span className="items-center ml-8 font-bold">Business Services</span>
        </div>
        <p className="pt-5">
          Open new Opportunites to grow your busniess. Enter new markets and
          discover new contitnents, We are with you, door-to-door.
        </p>
      </div>
      <div className="bg-white w-80 h-52 rounded-xl px-5 py-6">
        <div className="flex items-center border-b-2 pb-3">
          <SlGlobe className="text-[#ff6813] text-2xl" />
          <span className="items-center ml-8 font-bold">
            Shipping & Logistics
          </span>
        </div>
        <p className="pt-5">
          Open new Opportunites to grow your busniess. Enter new markets and
          discover new contitnents, We are with you, door-to-door.
        </p>
      </div>
      <div className="bg-white w-80 h-52 rounded-xl px-5 py-6">
        <div className="flex items-center border-b-2 pb-3">
          <TiMessage className="text-[#0075ff] text-2xl" />
          <span className="items-center ml-8 font-bold">24/7 Support</span>
        </div>
        <p className="pt-5">
          Open new Opportunites to grow your busniess. Enter new markets and
          discover new contitnents, We are with you, door-to-door.
        </p>
      </div>
    </>
  );
}

export default Cards;
