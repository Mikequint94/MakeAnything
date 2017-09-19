import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser, logout } = this.props;
    return (
      currentUser ? (
        <div className="profilebuttons">
          <Link to={`/member/${this.props.currentUser.username}`}>
          {currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="loginbuttons">
          <Link to="/signup">Sign Up</Link>
          <a>|</a>
          <Link to="/login">Log In</Link>
        </div>
      )
    );
  }
}

export default Greeting;
