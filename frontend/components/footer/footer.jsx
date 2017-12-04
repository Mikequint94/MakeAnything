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
  validemail(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  handleAddEmail(){
    // idea from squirtle on stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
    if (this.validemail(this.state.email)){
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
    });
  }

  render() {
    return (
      <div className="footercontainer">
        <a href = "/">
          <img className="robot" height="132" src="https://res.cloudinary.com/make-anything/image/upload/c_crop,g_north,h_588,w_580,x_0,y_0/v1505856892/Logo_Make_Anything_Robot_x1jxzn.png" />
        </a>
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
          <h2>About Me</h2>
            <a href="/#/resume">
              <p>Who Am I</p>
            </a>
            <p>
              <a href="mailto:mjq8@cornell.edu">Contact Me</a>
            </p>
            <p>
              <a href="mailto:mjq8@cornell.edu?subject=I%20need%20help%20with%20MakeAnything">Help</a>
            </p>
        </div>
        <div className="findus">
          <h2>Find Me</h2>
          <a href="https://github.com/Mikequint94" target="_blank">
            <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,w_20/v1506612881/25231_albynd.png"/>
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/michael-quint/" target="_blank">
            <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,w_20/v1506613723/linkedin_circle_black-512_tvuepk.png"/>
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/Mikequint94/MakeAnything" target="_blank">
            <img src="https://res.cloudinary.com/make-anything/image/upload/c_scale,w_20/v1506614644/Logo_Make_Anything_Robot_blackicon_a9hmif.png"/>
            <p>MakeAnything</p>
          </a>
        </div>
      </div>
    );
    }
  }

export default Footer;
