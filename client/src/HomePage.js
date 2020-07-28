import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CoursesDisplay from './containers/CoursesDisplay';
import Course from './containers/Course';





function HomePage(props){
    return (
        <BrowserRouter>
        <Course></Course>
        <div className="content">
        <Route path="/order/:id" component={CoursesDisplay} />   
        </div>
        </BrowserRouter>
    )
}

export default HomePage;