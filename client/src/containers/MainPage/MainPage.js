import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MainPage.css'

export default function MainPage (){
    return(
        <Carousel>
  <Carousel.Item>
     <div class = "container">
    <img
      className="d-block w-100"
      src={require("../../static/images/1.jpg")}
      alt="First slide"
    />
    <button id = "btn" class="btn btn-primary" type="button"> button</button>
    </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={require("../../static/images/2.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={require("../../static/images/3.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
}
