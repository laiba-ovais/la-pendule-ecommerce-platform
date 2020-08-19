import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Router, Switch ,withRouter} from 'react-router-dom';
import CoursesDisplay from './containers/CoursesDisplay';
import Course from './containers/Course';
import Navbar from './components/Navbar/Navbar';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import MainPage from './containers/MainPage/MainPage';
import Profile from './components/Users/Profile'
import Home from './containers/Home/Home';
import Cart from './components/Cart';
import Modal from './components/Cart/Modal';


import ServiceRegister from './components/ServiceRegisteration/ServiceRegister';

import CourseUpload from './containers/courseUpload/courseUpload';
import ProductProvider from './components/Course/contex';
// var createBrowserHistory = require('history/lib/createBrowserHistory');
import history from './components/Course/history';
import courseUpload from "./containers/courseUpload/courseUpload"

function HomePage(props){
    return (
        
        // <Switch>
        
        // <Route exact path="/home" component={Home} /> 
        // </Switch>
        <BrowserRouter  >
            <div >
        <ProductProvider>
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/profile" component={Home} />  
        <Route exact path="/serviceRegistration" component={ServiceRegister} />
        <Route exact path="/profile" component={Home} />  
        <Route exact path="/courseUpload" component={courseUpload} />  

        <Route path="/cart" component={Cart} /> 
        <Route path="/courses/:id" component={CoursesDisplay} /> 
        <Route exact path="/" component={MainPage} /> 
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/courses" component = {Course}/>
        <Route exact path="/register" component = {SignUp}/>
        <Route exact path="/signin" component = {SignIn}/>
        {/* <Route exact path="/playlist" component = {Playist}/> */}
        </Switch>

        <Modal />
        </ProductProvider>
        
        </div>
        </BrowserRouter> 
       
    );
}

export default HomePage ;