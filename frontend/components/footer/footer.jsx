import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "",
                  added: "hidden",
                  error: "hidden"};
  }

  handleInput(){
    return event => {
      this.setState({
        email: event.target.value
      });
    };
  }
  handleAddEmail(){
    if (this.state.email.length > 5){
    return event => {
      event.preventDefault();
      clearTimeout(this.timer);
      this.timer = setTimeout(()=> {
        this.reset();
      }, 3000);
      this.setState({
        email: "",
        error: "hidden",
        added: "shown"
      });
    };
  } else {
    return event => {
      event.preventDefault();
      clearTimeout(this.timer);
      this.timer = setTimeout(()=> {
        this.reset();
      }, 3000);
      this.setState({
        error: "shown",
        added: "hidden"
      });
    };
  }
  }
  reset(){
    this.setState({
      error: "hidden",
      added: "hidden"
    })
  }

  render() {
    return (
      <div className="footercontainer">
        <img className="robot" height="140" src="https://res.cloudinary.com/make-anything/image/upload/c_crop,g_north,h_588,w_580,x_0,y_0/v1505856892/Logo_Make_Anything_Robot_x1jxzn.png" />
        <form onSubmit={this.handleAddEmail()}>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <p className="newsletterP">Let your inbox help you discover our best projects. Learn how to make anything!</p>
            <div className="makeflex">
              <input type="text" placeholder="enter email..." onChange={this.handleInput()}
                value={this.state.email}/>
              <input type="submit" value="Join"/>
              <p className={this.state.added}>Email Added!</p>
              <p className={this.state.error}>Invalid Email Address.</p>
            </div>
          </div>
        </form>
        <div className="aboutus">
          <h2>About Us</h2>
          <Link to="/about">Who We Are</Link>
          <p></p>
          <Link to="/contact">Contact Us</Link>
          <p></p>
          <Link to="/help">Help</Link>
        </div>
        <div className="findus">
          <h2>Find Us</h2>
          <a href="http://www.facebook.com">
            <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,w_20/v1506237405/8d077b26a96a8a649a285dcd99bb97dc-facebook-rubber-icon-by-vexels_lpgjhz.png"/>
            <p>Facebook</p>
          </a>
          <a href="http://www.youtube.com">
            <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,w_20/v1506238495/109355_media_512x512_pcjtuq.png"/>
            <p>Youtube</p>
          </a>
          <a href="http://www.pinterest.com">
            <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,w_20/f_png/v1506238631/23775_fcgkk1.svg"/>
            <p>Pinterest</p>
          </a>
        </div>
      </div>
    );
  }
  }

export default Footer;
