import React from "react";
import Head_Section from "../components/Head_Section";
import Header from "../components/Header";
import Services from "../components/Services";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
const SearchForm = () => {
  return (
    <>
      <Header />
      <Head_Section />
      <SearchBar />
      <Services />
      <Footer />
    </>
  );
};

export default SearchForm;
