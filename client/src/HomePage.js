import React, { Component } from 'react'
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import CoursesDisplay from './containers/CoursesDisplay';
import Course from './containers/Course';
import Navbar from './components/Navbar/Navbar';



//s capital nhi hoga/.?

function HomePage(props){
    return (
       
        <div >
        <Navbar></Navbar>
        <Switch>
        <Route path="/courses/:id" component={CoursesDisplay} /> 
        <Route exact path="/" component = {Course}/>
        <Route exact path="/home" component = {Course}/>
        </Switch>
        
        </div>
       
    );
}

export default HomePage;