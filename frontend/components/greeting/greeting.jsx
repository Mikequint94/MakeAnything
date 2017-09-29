import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
  toggleSignup(){
    // console.log(this.props);
    this.props.toggleSignup();
  }
  toggleLogin(){
    // console.log(this.props);
    this.props.toggleLogin();
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
          <button onClick={this.toggleSignup.bind(this)}>Sign Up</button>
          <a>|</a>
          <button onClick={this.toggleLogin.bind(this)}>Log In</button>
        </div>
      )
    );
  }
}

export default Greeting;
