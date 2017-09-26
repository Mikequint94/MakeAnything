import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser, logout } = this.props;

    let toggleLink;
    if (currentUser) {
       toggleLink =
        (this.props.location.pathname === "/") ?
          (<Link to={`/member/${this.props.currentUser.id}/${this.props.currentUser.username}`}>
            <div className="profilebuttons">
              <img className="profpic" src={currentUser.img_url}/>
              {currentUser.username}
              <img className="arrow" src="https://res.cloudinary.com/make-anything/image/upload/v1505925304/arrow_utmwvp.png"/>
            </div>
          </Link> ) : (
          <Link to={`/`}>
            <div className="profilebuttons">
              <img className="profpic" src={currentUser.img_url}/>
              {currentUser.username}
              <img className="arrow" src="https://res.cloudinary.com/make-anything/image/upload/v1505925304/arrow_utmwvp.png"/>
            </div>
          </Link>
        );
      }
    return (
      currentUser ? (
        <div>
          {toggleLink}
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
