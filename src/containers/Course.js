import React from 'react';
import { CourseDetails } from '../components/Course/CourseDetails';
import CourseCardList from '../components/Course/CourseCardList';
import { GridList } from '@material-ui/core';

const Course = () => {
        return(
            
            <GridList cols={3} cellHeight={'auto'}>
                <CourseCardList CourseDetails={CourseDetails}/>
            </GridList>
                

           
            
        )
}

export default Course;