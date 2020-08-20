import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`/getuser`)
      .then(res => {
        // const users = res.data;
       // console.log(users);
        this.setState({ users: res.data});
        // var user1 = [];
        // res.data.map((user,i)=>{
        //   var temUser = user[i];
        //   user1[i]= temUser;  
         
        })


      //})
  }

  render() {
    return (
      
      <ul>
        { this.state.users.map(user => <li>{user.first_name}</li>)}
        {console.log(this.state.users)}
      </ul>
    )
  }
}