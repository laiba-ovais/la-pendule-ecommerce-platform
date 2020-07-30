import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
//import {CourseDetails } from './CourseDetails';
import { Grow } from '@material-ui/core';
import 'tachyons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345, 
    padding: 3,
    display: "inline-block",
    borderRight: 3,
    margin: 2,
    borderWidth: 2,
    boxShadow: 3

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9s
    
  },
  avatar: {
    backgroundColor: red[500],
  },
  container:{
    transition: 'all 1s linear', 

  },
}));

export default function CourseCardList({authorInitial, courseTitle, uploadDate, courseImage, imageTitle ,courseAuthor}) {
  const classes = useStyles();

  return (
  
    <div className= " dib br3 ma2 grow bw2 shadow-5">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="course" className={classes.avatar}>
            {authorInitial}
          </Avatar>
        }
        title={courseTitle}
        subheader={uploadDate}
      />
      <CardMedia
        className={classes.media}
        image={courseImage}
        title={imageTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {courseAuthor}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

// import React, { Component } from 'react'

// export default class CourseCard extends Component {
//   render() {
//     return (
//       <div>
//         course
//       </div>
//     )
//   }
// }

