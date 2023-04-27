import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import HeadSection from "../components/HeadSection";
const SearchForm = () => {
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

export default SearchForm;
