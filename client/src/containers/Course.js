import React, {Component, useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import Default from '../components/Default.';
import { CourseDetails } from '../components/Course/CourseDetails';
import CourseCardList from '../components/Course/CourseCardList';
import { GridList } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Course/CourseDetails';
import "./Course.css";

import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from '../components/Navbar/SearchBar';


class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse: "", 
        CourseDetails: CourseDetails,
        searchField: "" };
        
    }
   
    // callAPI(){
    //     fetch("http://localhost:4000/")
    //     .then(res => res.text())
    //     .then(res => this.setState({apiResponse: res}))
    // }

    // componentWillMount(){
    //     this.callAPI();
        
    // }

     onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }
    
    // on change wala hi hai ye sahi chal rha hai dekho./..input

              
    
    render(){

       
        
         const   {searchField, searchChange} = this.state;
            const filteredcourse = CourseDetails.filter(CourseDetails=>{
                   return( 
                    CourseDetails.courseTitle.toLowerCase().includes(this.state.searchField.toLowerCase()))
                   })
                //    this.setState({CourseDetails:filteredcourse}); 
                   
                   console.log(CourseDetails);
                    
        return(
            <div className ="container">
            <div>
            <SearchBar  searchChange={this.onSearchChange}>
            </SearchBar>
            </div>
            <GridList cols={3} cellHeight={'auto'}> 
            <CourseCardList CourseDetails={filteredcourse}/>  
            </GridList>
             </div>

            
            
        )


    }
}

export default Course;