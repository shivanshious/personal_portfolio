import React from "react";
import About from "../components/About";
import CoverInfo from "../components/CoverInfo";
import Education from "../components/Education";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <>
      <Header />
      <CoverInfo />
      <About />
      <Skills />
      <Education />
      <Projects />
    </>
  );
};

export default Homepage;
