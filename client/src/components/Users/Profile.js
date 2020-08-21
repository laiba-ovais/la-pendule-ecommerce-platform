
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
                  var first_name="Bisma" ;
                  var last_name="Mansoor"
                  if(!value.signedin){
                    return(
                      <div className="col-md-10 d-flex justify-content-center">
                      <Container className="d-flex justify-content-center bg-washed-green">
                      <h1 className="dot">{"Bisma".charAt(0).toUpperCase()}</h1><br></br><br></br>
                      <h2 className="block">{`${first_name.toUpperCase()} ${last_name.toUpperCase()}`}</h2>
                      </Container>
                        
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
