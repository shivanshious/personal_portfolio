import React, { useEffect, useState } from "react";
import { experienceData } from "../constants/data";
import styles from "../styles/experience.module.css";
import "animate.css";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Experience = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1900);
    });
  }, []);
  return (
    <>
      <div className={`${styles.experience_container} container`}>
        <p className={`${styles.experience_heading}`}>Work Experience</p>
        <div className={`${styles.experiences_holder}`}>
          {experienceData.map((experience) => {
            return (
              <div
                className={`${styles.experience_bar} spaceBetween ${
                  scroll ? "animate__animated animate__fadeInRight" : ""
                }`}
              >
                <div style={{ width: "15%" }}>
                  <div className={`${styles.experience_icon}`}>
                    <ApartmentIcon className={`${styles.icon}`} />
                  </div>
                </div>
                <div className={`${styles.experience_info}`}>
                  <h2>{experience.designation}</h2>
                  <h3>{experience.companyName}</h3>
                  <p>{experience.location}</p>
                </div>
                <div className={`${styles.joining_info}`}>
                  {`${experience.joining.from} - ${experience.joining.to}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
