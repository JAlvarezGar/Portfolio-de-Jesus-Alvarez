import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import { ContainerA } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import imagen from "../images/imagenPrueba.jpg";
import splash from "../images/spaceman_title.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const MiTrabajo = (props) => {
  const classes = useStyles();
  if (props.dark === true) {
    return (
      <ContainerA>
        <h1 id={props.id}>My Work ( repository)</h1>
        <div className={classes.container}>
          {miCards.map(({ link, foto, icon , trim, comment}, index) => (
            <Card className={classes.card} key={index} >
              <CardActionArea>
                <CardMedia
                  image={foto}
                  title="imagenTrabajos"
                  className={classes.fototrabajo}
                />

                <CardContent>
                  <div className={classes.commentIcon}>
                    <FontAwesomeIcon
                      icon={icon}
                      size="3x"
                    />
                    <Typography >
                      <a href={link}>
                        {trim}
                      </a>
                    </Typography>
                   </div>
                   <div className={classes.comment}>
                     <Typography variant="h6" >{comment}</Typography>
                   </div>
                  
                 
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </ContainerA>
    );
  }
};



const miCards = [
  {
    icon: faGithub,
    link: "# ",
    trim:"CALCULADORA",
    foto: imagen,
    comment:"Calculadora básica"
  },
  {
    icon: faGithub,
    link: "https://github.com/JAlvarezGar/Spaceman",
    trim:"SPACEMAN",
    foto: splash,
    comment:"Juego del tipo buscaminas"
  },
  {
    icon: faGithub,
    link: "#",
    trim:"CLON-SPOTIFY",
    foto: imagen,
    comment:"Copia del front-end de Spotify"
  },
  {
    icon: faGithub,
    link: "#",
    trim:"PORTFOLIO",
    foto: imagen,
    comment:"Repositorio de este portfolio"
  },
  {
    icon: faGithub,
    link: "#",
    trim:"CLON-MICROSOFT",
    foto: imagen,
    comment:"Recreación de la web de Microsoft"
  },
];

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "20px",
    gap: "10px",
    width: "90%",
    objectFit: "contain",

    margin: "0 auto",
    "@media (max-width:825px)": {
      gridTemplateColumns: "1fr 1fr",
      width: "90%",
    },
    "@media (max-width:550px)": {
      gridTemplateColumns: "1fr",
      width: "90%",
    },
  },
  card: {
    // minWidth:600,
    // minHeight: 600,
    // margin: "0 auto",
  },
  fototrabajo: {
    width: "100%",
    height: "0",
    paddingTop: '56.25%', // 16:9

  },
  commentIcon: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-around",
    margin:"0 auto",
    "& a": {
      textDecoration: "none",
      
    },
  },
  comment:{
    display: "flex",
    justifyContent: "center",
    padding: "5px",
    fontSize:"10px"
  }
  
});
