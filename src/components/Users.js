import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          { this.props.users.map(user =>
            <li key={user.hometown}>
            {user.username}
            </li>)
            /* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.length
            /* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  //  Use state to access the array of users. 
  return { users: state.users }
}
// Your mapStateToProps function should return an object with keys. Each key will become a prop in your component, allowing you to assign values based on the provided state.

// connect this component to Redux
export default connect(mapStateToProps)(Users)
