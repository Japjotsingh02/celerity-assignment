import React from "react";
import Header from "../components/Header";
import Progressbar from "../components/Progressbar";
import Summary from "../components/Summary/Summary";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location=useLocation();

  return (
    <>
      <Header />
      <Progressbar/>
      <Summary data={location.state}/>
    </>
  );
};

export default Booking;
