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
import {ProductConsumer} from '../components/Course/contex';

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

    
    // on change wala hi hai ye sahi chal rha hai dekho./..input

              
    
    render(){

       
        
     
                    
        return(
            
<ProductConsumer>
        {
          (value)=>{
            return( <div style={{marginTop: '100px'}} className ="container">
            <SearchBar searchChange={value.searchChange} ></SearchBar>
            <GridList cols={3} cellHeight={'auto'}> 
            <CourseCardList CourseDetails={value.products}/>  
            </GridList>
             </div>)}}
        </ProductConsumer>
            

            
            
        )


    }
}

export default Course;