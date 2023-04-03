import React from "react";
import styles from "../styles/project.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../constants/projectsData";

const Projects = () => {
  return (
    <>
      <div className={`${styles.projects_container} container`}>
        <p className={`${styles.projects_heading}`}>My Work</p>
        <Box sx={{ width: "100%", marginTop: "3rem" }}>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 10, sm: 10, md: 6 }}
          >
            {projectsData.map((project, idx) => {
              return (
                <Grid item xs={4}>
                  <ProjectCard project={project} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Projects;
