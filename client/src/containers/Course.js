import React, {Component} from 'react';
import { CourseDetails } from '../components/Course/CourseDetails';
import CourseCardList from '../components/Course/CourseCardList';
import { GridList } from '@material-ui/core';

class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse: ""};
    }

    callAPI(){
        fetch("http://localhost:9000/Courses")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
    }

    componentWillMount(){
        this.callAPI();
    }
    render(){
        return(
            <GridList cols={3} cellHeight={'auto'}>
                <CourseCardList CourseDetails={CourseDetails}/>
            </GridList>
        )

    }
}

export default Course;