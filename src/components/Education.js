import React, { useEffect, useState } from "react";
import EducationTable from "./EducationTable";
import styles from "../styles/education.module.css";

const Education = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 600);
    });
  }, []);
  return (
    <>
      <div className={`${styles.education_container} container`}>
        <p>Education Background</p>
        <div
          className={`${styles.table_container} ${
            scroll ? "animate__animated animate__zoomIn" : ""
          } `}
        >
          <EducationTable />
        </div>
      </div>
    </>
  );
};

export default Education;
