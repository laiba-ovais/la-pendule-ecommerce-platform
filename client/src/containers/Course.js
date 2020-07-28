import React, {Component} from 'react';
import { CourseDetails } from '../components/Course/CourseDetails';
import CourseCardList from '../components/Course/CourseCardList';
import { GridList } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <div className ="container">
            <GridList cols={3} cellHeight={'auto'}>
            <CourseCardList CourseDetails={CourseDetails}/>
            </GridList>
             </div>
            
            
        )


    }
}

export default Course;