import React, { useState } from "react";
import styles from "../styles/achievements.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { achievementsData } from "../constants/achievementsData";

const Achievements = () => {
  const [id, setId] = useState(2);

  const handleArrowClick = (btn) => {
    if (btn === "left") {
      document.getElementById("scroller").scrollLeft -= 690;
      setId(id - 2);
    } else {
      document.getElementById("scroller").scrollLeft += 690;
      setId(id + 2);
    }
  };

  return (
    <>
      <div className={`${styles.achievements_container}`}>
        <p className={`${styles.achievements_heading}`}>
          Achievements & Certificates
        </p>
        <div className={`${styles.achievements_holder} spaceBetween`}>
          <div className={`${styles.left_arrow}`}>
            <IconButton
              sx={{ backgroundColor: "#3c3c3c" }}
              onClick={() => handleArrowClick("left")}
              disabled={id <= 2}
            >
              <ArrowBackIosNewIcon className={`${styles.arrow_color}`} />
            </IconButton>
          </div>
          <div id="scroller" className={`${styles.content}`}>
            {achievementsData.map((achievement, idx) => {
              return (
                <div
                  key={achievement.id}
                  className={`${styles.one_achievement}`}
                >
                  <img src={achievement.img_url} alt="achievement" />
                  <p>{achievement.title}</p>
                </div>
              );
            })}
          </div>
          <div className={`${styles.right_arrow}`}>
            <IconButton
              sx={{ backgroundColor: "#3c3c3c" }}
              onClick={() => handleArrowClick("right")}
              disabled={id >= achievementsData.length - 2}
            >
              <ArrowForwardIosIcon className={`${styles.arrow_color}`} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
