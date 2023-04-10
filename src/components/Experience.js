import React, { useEffect, useState } from "react";
import { experienceData } from "../constants/data";
import styles from "../styles/experience.module.css";
import "animate.css";
import ExperienceBar from "./ExperienceBar";

const Experience = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1900);
    });
  }, []);
  return (
    <>
      <div className={`${styles.experience_container}`}>
        <p className={`${styles.experience_heading}`}>Work Experience</p>
        <div className="spaceBetween">
          <div style={{ width: "15%" }}></div>
          <div
            className={`${styles.experiences_holder} ${
              scroll ? "animate__animated animate__slideInRight" : ""
            }`}
          >
            {experienceData.map((experience, idx) => {
              return <ExperienceBar experience={experience} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
