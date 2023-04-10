import React from "react";
import About from "../components/About";
import CoverInfo from "../components/CoverInfo";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Homepage = () => {
  return (
    <>
    <div className="container">
      <Header />
      <CoverInfo />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
    </div>
    </>
  );
};

export default Homepage;
