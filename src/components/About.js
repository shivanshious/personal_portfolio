import React from "react";
import styles from "../styles/about.module.css";
import { coverLetter } from "../constants/data";

const About = () => {
  return (
    <>
      <div>
        <div className={`${styles.about_container}`}>
          <h2>About Me</h2>
          <p>{coverLetter.text}</p>
        </div>
      </div>
    </>
  );
};

export default About;
