import React, { Component } from 'react'
import axios from 'axios'
import {ProductConsumer} from '../../components/Course/contex'
export class Profile extends Component {
    constructor() {
        super()
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          errors: {}
        }
      }
      componentDidMount(){
        
      }
      getItems=()=>
      {
      axios.get('/')
      .then(response => this.setState({email: response.data.email}))

      }

    render() {
        return (
          <ProductConsumer>
              {
                (value)=>{
                  if(value.signedin){return(<div>
                    <h2>HELLO BRO {value.email}</h2>
                   </div>)}
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
