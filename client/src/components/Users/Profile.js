import React, { Component } from 'react'
import axios from 'axios'

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
            <div>
                
            </div>
        )
    }
}

export default Profile
