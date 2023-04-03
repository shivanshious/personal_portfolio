import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.scrollY === 0) {
      setScroll(true);
    }
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1200);
    });
  }, []);

  const handleCardClick = () => {
    navigate(`/projects/${project.route}`);
  };

  return (
    <>
      <Card
        sx={{
          height: "300px",
          backgroundColor: "#2c2c2c",
          border: "1px solid #3e3e3e",
        }}
        className={`${scroll ? "animate__animated animate__slideInUp" : ""}`}
      >
        <CardActionArea onClick={() => handleCardClick()}>
          <CardMedia
            component="img"
            height="180"
            image={require(`../Images/projectImages/${
              project.imgUrl ? project.imgUrl : "test.png"
            }`)}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#65b8ff" }}
            >
              {project.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "rgb(210,210,210)" }}
            >
              {project.shortDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProjectCard;
