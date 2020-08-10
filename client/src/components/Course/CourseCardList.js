import React from 'react';
import CourseCard from './CourseCard';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const CourseCardList = ({ CourseDetails }) => {
    const courseArray = CourseDetails.map((course,i) => {
      return <Link to={{ pathname: '/courses/' + CourseDetails[i]._id, state: CourseDetails[i]._id , key:CourseDetails[i]._id }}    ><CourseCard
        courseId = { CourseDetails[i]._id }
        authorInitial  = { CourseDetails[i].authorInitial }
        courseTitle = { CourseDetails[i].courseTitle }
        uploadDate = { CourseDetails[i].uploadDate }
        courseImage = { CourseDetails[i].courseImage }
        imageTitle = { CourseDetails[i].imageTitle }
        courseAuthor = { CourseDetails[i].courseAuthor }
        /> </Link>;
    });
    return (
      <div>
       
        { courseArray }
     
      </div>
    );
      

}


// import React, { Component } from 'react'

// export default class CourseCardList extends Component {
//   render() {
//     return (
//       <div>
  // listcourses
//       </div>
//     ) yahan se link karein gay na products ko nh dekho woj array of products hai humein us array ka index b tu chahiyay hoga jisse click kiya hai???? acha karke dekho yahan pe
//   } yahan hoga???
// }



export default CourseCardList;