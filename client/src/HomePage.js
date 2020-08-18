import React, { Component } from 'react'
import { BrowserRouter,Switch, Route, Link, Router ,withRouter} from 'react-router-dom';
import CoursesDisplay from './containers/CoursesDisplay';
import Course from './containers/Course';
import Navbar from './components/Navbar/Navbar';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import MainPage from './containers/MainPage/MainPage';
import Home from './containers/Home/Home';
import Cart from './components/Cart';
import Modal from './components/Cart/Modal';
import CourseUpload from './containers/courseUpload/courseUpload';
import {ProductProvider} from './components/Course/contex';
function HomePage(props){
    return (
        
        // <Switch>
        
        // <Route exact path="/home" component={Home} /> 
        // </Switch>
        <Router>
            <div >
        <ProductProvider {...this.props} >
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/profile" component={Home} />  
        <Route path="/cart" component={Cart} /> 
        <Route path="/courses/:id" component={CoursesDisplay} /> 
        <Route exact path="/" component={MainPage} /> 
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/courses" component = {Course}/>
        <Route exact path="/register" component = {SignUp}/>
        <Route exact path="/signin" component = {SignIn}/>
        <Route exact path="/courseUpload" component = {CourseUpload}/>
        </Switch>
        <Modal />
        </ProductProvider>
        
        </div>
        </Router>
        
       
        
        
       
    );
}

export default withRouter(HomePage);