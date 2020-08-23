import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MainPage.css';
import { Link } from 'react-router';
//import {ButtonContainer} from '../components/Button/Button';

export default function MainPage (){
    return(
        <Carousel>
  <Carousel.Item>
    
    <img
      className="d-block w-100 h-100 op"
      src={require("../../static/images/1.png")}
      alt="First slide"
    />

    <a href='/courses'>
    <button id = "btn" class="btn btn-primary" type="button" ><b>Get Started!</b> 
    
    </button>
    </a> 
    
    
    <Carousel.Caption>
      <h3>The Essence of Pefect Time</h3>
      
      <p>The architect of time</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100 op"
      src={require("../../static/images/2.png")}
      alt="Third slide"
    />
    <a href='/courses'>
    <button id = "btn" class="btn btn-primary" type="button" ><b>Get Started!</b> 
    </button>
     
    </a>

    <Carousel.Caption>
      <h3>For Classy Times</h3>
      <p>A time to watch. A time to tell.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100 op"
      src={require("../../static/images/3.png")}
      alt="Third slide"
    />
    <a href='/courses'>
    <button id = "btn" class="btn btn-primary" type="button" ><b>Get Started!</b> 
    </button>
    </a>
    <Carousel.Caption>
      <h3>Get Stylish, Get Watch</h3>
      <p>The ones to watch.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
}
