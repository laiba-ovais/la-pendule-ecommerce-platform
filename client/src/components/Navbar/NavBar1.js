import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ProductConsumer} from '../Course/contex';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

function Navbar1() {
 return(
  <ProductConsumer>
  {
    (value)=>{
      const {cart} = value;
      console.log(cart.length)
return(
  <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand ><img width="100px" height="40px" src={require("../../static/images/logo-la-pendule.jpeg")}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/"><Typography style={ { color: "white"}} variant="h6" noWrap>
                       Home  
                  </Typography></Nav.Link>
    <Nav.Link href="/courses">
    <Typography style={ { color: "white"}} variant="h6" noWrap>
                      Store  
                  </Typography></Nav.Link>
    <Nav.Link href="/about"><Typography style={ { color: "white"}} variant="h6" noWrap>
                      About 
                  </Typography></Nav.Link>
  </Nav>
  <Nav >
      {/* <Nav.Link href="/cart">Cart 🛒 </Nav.Link> */}
      <div>
      <Link to= '/cart'>
                  <IconButton
                    color="inherit"
                    aria-label="cart"
                  >
                  <Badge badgeContent={value.cart.length} color="secondary">
                  <ShoppingCartIcon  style={ { fontSize: 30 , color: "white"}} />
                  </Badge>
                  </IconButton>
                  </Link>
                  </div>
      {value.signedin ?
      (
        <Nav.Link onClick={value.onLoggout}>Log Out</Nav.Link>
      ): (
        <Nav>
        {/* <Nav.Link href="/signIn">Sign In</Nav.Link>
      <Nav.Link href="/register">Sign Up</Nav.Link> */}

                  <MenuItem>
                  <Link to= '/register' id='titleatag' className='zoom' ><Typography style={ { color: "white"}} variant="h6" noWrap>
                   Sign Up  
                  </Typography></Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to= '/signin' id='titleatag' className='zoom' ><Typography style={ {  color: "white"}}  variant="h6" noWrap>
                   Sign In   
                  </Typography></Link>
                  </MenuItem>
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