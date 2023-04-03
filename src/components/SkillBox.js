import React from "react";
import styles from "../styles/skills.module.css";

const SkillBox = ({ heading, technologies }) => {
  return (
    <>
      <div className={`${styles.single_skill_holder}`}>
        <h3>{heading}</h3>
        {technologies.map((item, key) => {
          return <p key={key}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default SkillBox;
