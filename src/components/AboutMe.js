import React from "react";
import { ContainerA, useStyles } from "./styles";
import redonda from "../images/redonda.png";
import TypeWriter from "react-typewriter-effect";
import { Button } from "@material-ui/core";
import cv from "../images/046.pdf";

export const AboutMe = (props) => {
  const classes = useStyles();

  if (props.dark == true) {
    return (
      <ContainerA>
        <h1 id={props.id}>About Me</h1>
        <div id="divFotoTypeWriter">
          <img className="foto" src={redonda}></img>
          {/* <img
            className="foto"
            src="https://lh3.googleusercontent.com/pBlvego6NbfJwednwoZaO2ijuTWW_RaxPHV9YmeabFG0_2E-MBJ1mNtrsV27HZrMZbEVtJb_T6rsM1NEAN6hHbaclwBDNRkgKqqtNjGjmGsisv8sXpYrXytEJSQ-mRASmiloGZLy4A=w2400"
            alt="foto"
          ></img> */}
          <div id="TwButton">
            <div id="typeWriter">
              <TypeWriter
                text="Hola, soy Jesús Álvarez García"
                textStyle={{
                  marginRight: "20px",
                  fontSize: "1.5rem",
                  color: "tomato",
                }}
                startDelay={500}
                typeSpeed={100}
              />
              <TypeWriter
                text="Soy desarrollador junior con conocimientos en la creación de aplicaciones nativas Android, React, HTML5, CSS3, Java y Javascript entre otros..."
                textStyle={{
                  marginTop: "20px",
                  marginRight: "20px",
                  fontSize: "1.2rem",
                }}
                startDelay={3500}
                typeSpeed={100}
              />
            </div>
          </div>
          <Button
            className={classes.btCV}
            variant="contained"
            href={cv}
            download
          >
            Download CV en pdf
          </Button>
        </div>
      </ContainerA>
    );
  }
};
