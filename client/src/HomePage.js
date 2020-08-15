import React, { Component } from 'react'
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import CoursesDisplay from './containers/CoursesDisplay';
import Course from './containers/Course';
import Navbar from './components/Navbar/Navbar';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import MainPage from './containers/MainPage/MainPage';
import Home from './containers/Home/Home';
import Cart from './components/Cart';
import Modal from './components/Cart/Modal';

function HomePage(props){
    return (
        
        // <Switch>
        
        // <Route exact path="/home" component={Home} /> 
        // </Switch>
       
        <div >
        <Navbar></Navbar>
        <Switch>
        <Route path="/cart" component={Cart} /> 
        <Route path="/courses/:id" component={CoursesDisplay} /> 
        <Route exact path="/" component={MainPage} /> 
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/courses" component = {Course}/>
        <Route exact path="/register" component = {SignUp}/>
        <Route exact path="/signin" component = {SignIn}/>
        </Switch>
        <Modal />
        </div>
        
       
    );
}

export default HomePage;