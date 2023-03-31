import React from "react";
import styles from "../styles/coverInfo.module.css";
import profile from "../Images/portfolio.avif";
import cover from "../Images/cover_background.jpg";
import { designation, name } from "../constants/data";

const CoverInfo = () => {
  return (
    <>
      <div className="container">
        <div className={`${styles.cover_container} spaceAround`}>
          <div className={`${styles.left_cover} `}>
            <h1 className={`${styles.name}`}>{name.text}</h1>
            <h3>({designation.text})</h3>
            <img src={cover} alt="cover" />
          </div>
          <div className={`${styles.right_cover}`}>
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverInfo;
