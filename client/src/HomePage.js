import React, { Component } from 'react'
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import CoursesDisplay from './containers/CoursesDisplay';
import Course from './containers/Course';
import Navbar from './components/Navbar/Navbar';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';



function HomePage(props){
    return (
       
        <div >
        <Navbar></Navbar>
        <Switch>
        <Route path="/courses/:id" component={CoursesDisplay} /> 
        <Route exact path="/" component = {Course}/>
        <Route exact path="/home" component = {Course}/>
        <Route exact path="/register" component = {SignUp}/>
        <Route exact path="/login" component = {SignIn}/>
        </Switch>
        
        </div>
       
    );
}

export default HomePage;