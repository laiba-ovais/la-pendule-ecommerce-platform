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
import GridWatches from './containers/GridWatches/GridWatches'
<<<<<<< HEAD
import FooterPage from './components/FooterPage/FooterPage';

=======
import PersonList from './components/getUser/getUser'
>>>>>>> 142f57a4f0ed8385ab8c6c8edfbdd1f6df553aac

import ServiceRegister from './components/ServiceRegisteration/ServiceRegister';

import CourseUpload from './containers/courseUpload/courseUpload';
import ProductProvider from './components/Course/contex';
// var createBrowserHistory = require('history/lib/createBrowserHistory');
import history from './components/Course/history';
import courseUpload from "./containers/courseUpload/courseUpload"
//import PersonList from './components/getUser/getUser';

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
        <Route exact path="/grid" component = {GridWatches}/>
<<<<<<< HEAD
        
=======
        <Route exact path="/user" component = {PersonList}/>
>>>>>>> 142f57a4f0ed8385ab8c6c8edfbdd1f6df553aac
        {/* <Route exact path="/playlist" component = {Playist}/> */}
        </Switch>
        <FooterPage></FooterPage>
        <Modal />
        </ProductProvider>
        
        </div>
        </BrowserRouter> 
       
    );
}

export default HomePage ;