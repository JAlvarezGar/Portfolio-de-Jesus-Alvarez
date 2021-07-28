import React from "react";
import { ContainerB } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin,faGoogle } from "@fortawesome/free-brands-svg-icons";

export const Contacto = (props) => {
  const classes = useStyles();
  
  if (props.dark === false) {
    return (
      <ContainerB>
        <h1 id={props.id} className={classes.h1}>
          Contact
        </h1>
        <div className={classes.cards}>
          {datosContacto.map(({ url, imagen, tono }, index) => (
            <Card className={classes.root} key={index}>
              <CardMedia>
                <FontAwesomeIcon icon={imagen} size="3x" color={tono} />
              </CardMedia>
              <CardContent>
                <Typography variant="h6" component="p">
                  {url}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContainerB>
    );
  }
};

const datosContacto = [
  {
    url: <a href="https://github.com/JAlvarezGar">Github</a>,
    imagen: faGithub,
    tono:'black',
  },
  {
    url:<a href="https://www.linkedin.com/in/jesusjalvarezgarcia/">Linkedin</a>,
    imagen: faLinkedin,
    tono:'royalblue',
  },
  {
    url: <a href="mailto:jjalvarezgar@gmail.com">jjalvarezgar@gmail.com</a>,
    imagen:faGoogle,
    tono:'crimson',
  },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "80%",
    '@media (max-width:680px)':{
      
      width:'100%',
     }
  },
  h1: {
    position: "absolute",
    top: "50px",
  },
  cards: {
    display: "flex",
    '@media (max-width:680px)':{
      display: "grid",
      gap: "20px",
      gridTemplateColumns: "1fr",
      width:'100%',
     }
  }
});
