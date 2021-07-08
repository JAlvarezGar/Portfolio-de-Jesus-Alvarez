import React from 'react';
import {ContainerB}from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export const  Contacto=(props)=> {
const classes=useStyles();
    if(props.dark==false){

        return (
            <ContainerB>
                <h1 id={props.id} className={classes.h1}>Contact</h1>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h1">
                            datos contacto
                        </Typography>
                    </CardContent>
                </Card>
            </ContainerB>
        )
    }
  
}

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
       maxWidth:'80%',
      // minHeight: 600,
      // margin: "0 auto",
     
    },
    h1:{
        position: 'absolute',
        top:'50px',
    }
    
  });

