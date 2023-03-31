import React from "react";
import { technicalSkills } from "../constants/data";
import styles from "../styles/skills.module.css";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className={`${styles.skills_container} spaceBetween`}>
          <div className={`${styles.left_skills_container}`}>
            <div className={`${styles.heading_container}`}>
              <p>{technicalSkills.text}</p>
            </div>
            <div className={`${styles.heading_container_extra}`}></div>
          </div>
          <div className={`${styles.right_skills_container}`}>
            <div className={`${styles.skills_holder}`}>
              <div className={`${styles.single_skill_holder}`}>
                <h3>{technicalSkills.frontend.heading}</h3>
                {technicalSkills.frontend.technologies.map((item, key) => {
                  return <p key={key}>{item}</p>;
                })}
              </div>
              <div className={`${styles.single_skill_holder}`}>
                <h3>{technicalSkills.backend.heading}</h3>
                {technicalSkills.backend.technologies.map((item, key) => {
                  return <p key={key}>{item}</p>;
                })}
              </div>
              <div className={`${styles.single_skill_holder}`}>
                <h3>{technicalSkills.otherSkills.heading}</h3>
                {technicalSkills.otherSkills.technologies.map((item, key) => {
                  return <p key={key}>{item}</p>;
                })}
              </div>
            </div>
            <div className={`${styles.skills_holder}`}>
              <div className={`${styles.single_skill_holder}`}>
                <h3>{technicalSkills.db_lang.heading}</h3>
                {technicalSkills.db_lang.technologies.map((item, key) => {
                  return <p key={key}>{item}</p>;
                })}
              </div>
              <div className={`${styles.single_skill_holder}`}>
                <h3>{technicalSkills.db.heading}</h3>
                {technicalSkills.db.technologies.map((item, key) => {
                  return <p key={key}>{item}</p>;
                })}
              </div>
              <div className={`${styles.single_skill_holder}`}>
                <h3>{technicalSkills.designing.heading}</h3>
                {technicalSkills.designing.technologies.map((item, key) => {
                  return <p key={key}>{item}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
