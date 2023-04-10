import React from "react";
import styles from "../styles/experience.module.css";
import ApartmentIcon from "@mui/icons-material/Apartment";

const ExperienceBar = ({ experience }) => {
  return (
    <>
      <div className={`${styles.experience_bar} spaceBetween `}>
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
    </>
  );
};

export default ExperienceBar;
