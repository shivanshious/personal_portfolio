import React, { useEffect, useState } from "react";
import { technicalSkills1, technicalSkills2 } from "../constants/data";
import styles from "../styles/skills.module.css";
import "animate.css";
import SkillBox from "./SkillBox";

const Skills = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className={`${styles.skills_container} spaceBetween`}>
          <div className={`${styles.left_skills_container}`}>
            <div className={`${styles.heading_container}`}>
              <p
                className={`${
                  scroll ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                Technical Skills
              </p>
            </div>
            <div className={`${styles.heading_container_extra}`}></div>
          </div>
          <div className={`${styles.right_skills_container}`}>
            <div
              className={`${styles.skills_holder} ${
                scroll
                  ? "animate__animated animate__fadeInRight animate__delay-1s"
                  : ""
              }`}
            >
              {technicalSkills1.map((item, idx) => {
                return (
                  <SkillBox
                    id={idx}
                    heading={item.heading}
                    technologies={item.technologies}
                  />
                );
              })}
            </div>
            <div
              className={`${styles.skills_holder} ${
                scroll
                  ? "animate__animated animate__fadeInRight animate__delay-1s"
                  : ""
              }`}
            >
              {technicalSkills2.map((item, idx) => {
                return (
                  <SkillBox
                    id={idx}
                    heading={item.heading}
                    technologies={item.technologies}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
