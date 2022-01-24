import React from "react";
import { ContainerB } from "./styles";

import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJava, faAndroid, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import javascript from '../images/javascript.svg'

export const Skills = (props) => {
  const classes = useStyles();

  return (
    <ContainerB>
      <h1 id={props.id}>Skills</h1>

      <div className="timeLineDiv">
        <Timeline align="left">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <FontAwesomeIcon icon={faHtml5} size="2x" color="red" />
              <FontAwesomeIcon icon={faCss3} size="2x" color="blue" />
              <FontAwesomeIcon icon={faDatabase} size="2x" color="green" />
              <TimelineConnector />

            </TimelineSeparator>

            <TimelineContent >
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  HTML5 - CSS3
                </Typography>
                <Typography component="h1">Web design and relational databases (SQL, PL-SQL)</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2018
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>

              <FontAwesomeIcon icon={faJava} size="3x" color="tomato" />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Java - C++
                </Typography>
                <Typography component="h1">Object-oriented programming</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2019
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>

              <FontAwesomeIcon icon={faAndroid} size="2x" color=" #A4C639" />
              
              
              <TimelineConnector  />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper} >
                <Typography variant="h6" component="h1">
                  Android
                </Typography>
                <Typography component="h1">Native application development with Android studio</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            
            <FontAwesomeIcon icon={faReact} size="3x" color="#61DBFB" />
            <img src={javascript} alt="javascript"/>
            </TimelineSeparator>
            <TimelineContent TimelineContent={classes.TimelineContent}>
              <Paper elevation={3} className={classes.paper} >
                <Typography variant="h6" component="h1">
                  React JS
                </Typography>
                <Typography component="h1">React library and Javascript </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </ContainerB>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "10px 16px",
    maxWidth:"300px",
    minWidth: "200px",

  },
  fondo:{
    backgroundColor:"#000",
  },
  
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


