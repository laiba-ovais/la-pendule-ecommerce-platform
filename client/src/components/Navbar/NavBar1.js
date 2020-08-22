import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ProductConsumer} from '../Course/contex';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { MDBIcon } from "mdbreact";



function Navbar1() {
 return(
  <ProductConsumer>
  {
    (value)=>{
      const {cart} = value;
      console.log(cart.length)
return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><img width="100px" height="40px" src={require("../../static/images/logo-la-pendule.jpeg")}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/courses">Store</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
  </Nav>
  <Nav >
      <Nav.Link href="/cart">Cart 🛒 </Nav.Link>
      {value.signedin ?
      (
        <Nav.Link onClick={value.onLoggout}>Log Out</Nav.Link>
      ): (
        <Nav>
        <Nav.Link href="/signIn">Sign In</Nav.Link>
      <Nav.Link href="/register">Sign Up</Nav.Link>
        </Nav>
      
      )}
    </Nav>
  
  </Navbar.Collapse>
  
</Navbar>
 )}

    }
</ProductConsumer>
  )
   
}
export default Navbar1;