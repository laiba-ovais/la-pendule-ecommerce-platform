import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'



function Navbar1() {
 return(
  <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/courses">Store</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
  </Nav>
  
</Navbar>
 )
   
}
export default Navbar1;