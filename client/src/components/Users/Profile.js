
import React, { Component } from 'react'
import axios from 'axios'
import {ProductConsumer} from '../../components/Course/contex'
import Container from 'react-bootstrap/Container'
import './Profile.css'

export class Profile extends Component {

    render() {
        return (
          <ProductConsumer>
              {
                (value)=>{
                  // var first_name="Bisma" ;
                  // var last_name="Mansoor"
                  if(value.signedin){
                    return(
                      <div className="col-md-10 d-flex justify-content-center">
                      <Container className="d-flex justify-content-center bg-washed-green">
                        <div>
                      <h1 className="dot d-flex justify-content-center">{"Bisma".charAt(0).toUpperCase()}<br /></h1><br></br><br></br>
                      </div>
                      <h1 className="block d-flex justify-content-center"><br />{`${value.loggedInUser.name.toUpperCase()}`}</h1>
                      </Container>
                      <button type='button' onClick={value.onLoggout}   ></button>
                      </div>
                   )}
                   else{
                    return<h2>login BRO</h2>
                   }
                }
              }

          </ProductConsumer>
            
        )
    }
}

export default Profile
