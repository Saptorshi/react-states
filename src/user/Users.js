import React, {Component} from 'react';
import User from  './User'

class Users extends Component {
  state = {
    user : [
      {name : "Jim", age : "20"},
      {name : "Joy", age : "30"},
      {name : "Jel", age : "40"},
    ],
    title : "User List"
  }

  makeMeYounger = () => {
    const newState = this.state.user.map((u) => {
      return u.age -= 10;
    })

    this.setState({newState});
  }

  render () {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make me younger!</button>
        <h2>{ this.state.title }</h2>
        <br />
        {
          this.state.user.map((user) => {
            return <User age={user.age}>{ user.name }</User>
           })
        }        
      </div>
    )
  }
}

export default Users;