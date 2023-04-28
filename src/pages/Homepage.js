import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HeadSection from "../components/HeadSection";
import SearchBar from "../components/SearchBar/SearchBar";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeadSection />
      <SearchBar />
      <Services />
      <Footer />
    </>
  );
};

export default Homepage;
