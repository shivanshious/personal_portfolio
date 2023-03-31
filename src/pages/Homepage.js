import React from "react";
import About from "../components/About";
import CoverInfo from "../components/CoverInfo";
import Header from "../components/Header";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <>
      <Header />
      <CoverInfo />
      <About />
      <Skills />
    </>
  );
};

export default Homepage;
