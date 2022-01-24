import React from "react";
import { ContainerA } from "./styles";
import foto from "../images/io.jpg";
import TypeWriter from "react-typewriter-effect";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

import cv from "../images/cv_jesus_alvarez.pdf";

export const AboutMe = (props) => {
  const classes = useStyles();

  if (props.dark === true) {
    return (
      <ContainerA>
        <h1 id={props.id}>About Me</h1>
        <div className={classes.content}>
          <Card className={classes.card}>
            <CardMedia
              image={foto}
              className={classes.cardMedia}
              title="picture"
            />
            <CardContent className={classes.cardContent}>
              <TypeWriter
                text="Hi, I´ m Jesús Álvarez García"
                textStyle={{
                  fontSize: "1.1rem",
                  color: "tomato",
                }}
                startDelay={500}
                typeSpeed={100}
                className={classes.typeWriter}
              />

              <TypeWriter
                text="I am a junior developer with knowledge in the creation of native applications Android, React, HTML5, CSS3, Java and Javascript between others ..."
                textStyle={{
                  marginTop: "20px",
                  fontSize: "1rem",
                }}
                startDelay={3500}
                typeSpeed={100}
              />

              <Button
                className={classes.btCV}
                variant="contained"
                href={cv}
                download
              >
                Download CV in pdf
              </Button>
            </CardContent>
          </Card>
        </div>
      
      </ContainerA>
    );
  }
};

const useStyles = makeStyles({
  content: {
    minWidth: "80vw",
    margin: " 0 auto",
  },
  card: {
    display: "flex",
    height: "60vh",
    position: "relative",
    padding: "30px",
    maxWidth: "70vw",
  },
  CardContent: {
 
  },
  cardMedia: {
    minWidth: "30rem",
    height: "auto",
    objectFit: "cover",
    borderRadius:"5px",

    "@media(max-width: 414px)": {
      //  display: "none",
      minWidth: "7rem",
      height: "400px",
      
    },
    "@media(max-width: 360px)": {
      //  display: "none",
      height: "300px",
      minWidth: "5rem",
    },
  },
  btCV: {
    bottom: "30px",
    right: "20px",
    padding: "10px",
    color: "tomato",
    position: "absolute",
    " &:hover": {
      backgroundColor: "tomato",
      color: "#fff",
    },
    "@media(max-width: 414px)": {
    
      bottom: "20px",
      position: "absolute",
      
    },
    "@media(max-width: 360px)": {
     
     maxWidth: "100px",
     left: "20px",
     bottom: "20px",
     position: "absolute",
    },
  },
  
  },
);
