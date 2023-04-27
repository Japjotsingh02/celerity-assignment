import React from "react";
import Icon from "../assets/icon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between my-5 mx-8">
      <div>
        <img src={Icon} alt="" />
      </div>
      <div className="flex space-x-5">
        <button
          className="text-white bg-[#6F57E9] px-5 rounded-lg"
          onClick={() => navigate("/listings")}
        >
          Login
        </button>
        <button className="border border-2 font-semibold border-[#6F57E9] px-5 rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Header;
