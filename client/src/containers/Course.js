import React, {Component} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import Default from '../components/Default.';
import { CourseDetails } from '../components/Course/CourseDetails';
import CourseCardList from '../components/Course/CourseCardList';
import { GridList } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Course.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';



class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse: "",
    coursProduct: CourseDetails, };
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

            <BrowserRouter>            
            <div className ="container">
            {/* <Navbar/>
            <Cart/>
            <Default/> */}
            <GridList cols={3} cellHeight={'auto'}>
            
            <CourseCardList CourseDetails={CourseDetails}/>
            
            

            </GridList>
             </div>
            </BrowserRouter>
            
            
        )


    }
}

export default Course;