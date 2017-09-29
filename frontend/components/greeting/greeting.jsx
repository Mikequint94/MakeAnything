import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
  toggleSignup(){
    this.props.clearErrors();
    this.props.toggleSignup();
  }
  toggleLogin(){
    this.props.clearErrors();
    this.props.toggleLogin();
  }
  toggleProfile(){
    this.props.clearErrors();
    this.props.toggleProfile();
  }

  render(){
    const { currentUser, logout} = this.props;

    let toggleLink;
    if (currentUser) {
       toggleLink = (
          <a className="hoverpointer" onClick={this.toggleProfile.bind(this)}>
            <div className="profilebuttons">
              <img className="profpic" src={currentUser.img_url}/>
              {currentUser.username}
              <img className="arrow" src="https://res.cloudinary.com/make-anything/image/upload/v1505925304/arrow_utmwvp.png"/>
            </div>
          </a>
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
