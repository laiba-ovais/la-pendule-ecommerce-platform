import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Course from './containers/Course';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage';
import 'tachyons';

ReactDOM.render(
  
   <BrowserRouter>
   <HomePage></HomePage>
   </BrowserRouter>,
  
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
