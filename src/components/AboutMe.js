import React from "react";
import { ContainerA } from "./styles";
import redonda from "../images/redonda.png";
import TypeWriter from 'react-typewriter-effect';


export const AboutMe = (props) => {
  if (props.dark == true) {
    return (
      <ContainerA>
        <h1 id={props.id}>About Me</h1>
        <div id="divFotoTypeWriter">
          {/* <img className="foto" src={redonda}></img> */}
          <img className="foto" src="https://lh3.googleusercontent.com/pBlvego6NbfJwednwoZaO2ijuTWW_RaxPHV9YmeabFG0_2E-MBJ1mNtrsV27HZrMZbEVtJb_T6rsM1NEAN6hHbaclwBDNRkgKqqtNjGjmGsisv8sXpYrXytEJSQ-mRASmiloGZLy4A=w2400" alt="foto"></img>
          <div id="typeWriter">
          <TypeWriter
          
          text="Hola, soy Jesús J. Álvarez"
          textStyle={{marginTop:"20px" , marginRight:"20px", fontSize:"18px",color:"tomato"}}
          startDelay={500}
          typeSpeed={100}
          
          />
          <TypeWriter
          text="Soy desarrollador junior con conocimientos en la creación de aplicaciones nativas Android, React, HTML5, CSS3, Java y Javascript entre otros..."
          textStyle={{marginTop:"20px" , marginRight:"20px", fontSize:"14px"}}
          startDelay={3500}
          typeSpeed={100}
          
          />
          </div>
          
          
        </div>
       
      </ContainerA>
    );
  }
};
