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

export const MiTrabajo = (props) => {
  const classes = useStyles();
  if (props.dark == true) {
    return (
      <ContainerA >
        <h1 id={props.id}>My Work </h1>
        <div className={classes.container}>
          {miCards.map(({ link, foto }, index) => (
            <Card className={classes.card}  key={index} >
              <CardActionArea>
                <CardMedia
                  image={foto}
                  title="imagenTrabajos"
                  className={classes.fototrabajo}
                />

                <CardContent>
                  <Typography>{link}</Typography>
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
    link: "CALCULADORA ",
    foto: imagen,
  },
  {
    link: "HIPOTENOCHAS",
    foto: imagen,
  },
  {
    link: "CLON-SPOTIFY",
    foto: imagen,
  },
  {
    link: "PORTFOLIO",
    foto: imagen,
  },
  {
    link: "CLON-MICROSOFT",
    foto: imagen,
  },
];

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: '20px',
    gap:'10px',
    width: '90%',
    objectFit:'contain',
    
    margin: '0 auto',
     '@media (max-width:825px)':{
      gridTemplateColumns: "1fr 1fr",
      width: '90%',

     },
     '@media (max-width:550px)':{
      gridTemplateColumns: "1fr",
      width:'90%',
     }
  },
  card: {
    // minWidth:600,
    // minHeight: 600,
    // margin: "0 auto",
  },
  fototrabajo: {
    width: "100%",
    height: "150px",
  },

});
