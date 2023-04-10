import React, { useEffect, useState } from "react";
import styles from "../styles/coverInfo.module.css";
import profile from "../Images/portfolio.avif";
import cover from "../Images/cover_background.jpg";
import { designation, name } from "../constants/data";
import "animate.css";

const CoverInfo = () => {
  const [scroll, setScroll] = useState(false);
  const [scrollImg, setScrollImg] = useState(false);

  useEffect(() => {
    if (window.scrollY === 0) {
      setScroll(true);
      setScrollImg(true)
    }
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY === 0);
    });
    window.addEventListener("scroll", () => {
      setScrollImg(window.scrollY < 90);
    });
  }, []);

  return (
    <>
      <div>
        <div className={`${styles.cover_container} spaceAround`}>
          <div className={`${styles.left_cover} `}>
            <h1 className={`${styles.name} `}>{name.text}</h1>
            <h3
              className={`${
                scroll ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              ({designation.text})
            </h3>
            <img src={cover} alt="cover" />
          </div>
          <div className={`${styles.right_cover}`}>
            <img src={profile} alt="profile" className={`${
                scrollImg ? "animate__animated animate__zoomIn animate__delay-1s" : ""
              }`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverInfo;
