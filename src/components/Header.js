import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CircleIcon from "@mui/icons-material/Circle";
import "animate.css";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.scrollY === 0) {
      setScroll(true);
    }
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY === 0);
    });
  }, []);

  return (
    <>
      <div className={`${styles.main_header} spaceBetween width100`}>
        <div className={`${styles.left_header}`}>
          <h2>
            <span>Hi</span>, my name is
          </h2>
        </div>
        <div className={`${styles.mid_header} spaceAround`}>
          <CircleIcon color="success" />
          <CircleIcon color="info" />
          <CircleIcon color="warning" />
          <CircleIcon color="secondary" />
        </div>
        <div className={`${styles.right_header} spaceBetween`}>
          <div style={{ width: "10%" }}></div>
          <div className={`${styles.right_header_icons_container} spaceAround`}>
            <LocalPhoneIcon
              style={{ color: "#65b8ff" }}
              className={`${
                scroll ? "animate__animated animate__slideInDown" : ""
              }`}
            />
            <EmailIcon
              style={{ color: "#65b8ff" }}
              className={`${
                scroll ? "animate__animated animate__slideInDown" : ""
              }`}
            />
            <LinkedInIcon
              style={{ color: "#65b8ff" }}
              className={`${
                scroll ? "animate__animated animate__slideInDown" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
