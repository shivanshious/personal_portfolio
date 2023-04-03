import React, { useEffect, useState } from "react";
import { technicalSkills } from "../constants/data";
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
                {technicalSkills.text}
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
              <SkillBox
                heading={technicalSkills.frontend.heading}
                technologies={technicalSkills.frontend.technologies}
              />
              <SkillBox
                heading={technicalSkills.backend.heading}
                technologies={technicalSkills.backend.technologies}
              />
              <SkillBox
                heading={technicalSkills.otherSkills.heading}
                technologies={technicalSkills.otherSkills.technologies}
              />
            </div>
            <div
              className={`${styles.skills_holder} ${
                scroll
                  ? "animate__animated animate__fadeInRight animate__delay-1s"
                  : ""
              }`}
            >
              <SkillBox
                heading={technicalSkills.db_lang.heading}
                technologies={technicalSkills.db_lang.technologies}
              />
              <SkillBox
                heading={technicalSkills.db.heading}
                technologies={technicalSkills.db.technologies}
              />
              <SkillBox
                heading={technicalSkills.designing.heading}
                technologies={technicalSkills.designing.technologies}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
