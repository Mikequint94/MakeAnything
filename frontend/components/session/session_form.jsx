import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PictureUpload from './picture_upload';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      img_url: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(key){
    return event => {
      this.setState({
        [key]: event.target.value
      });
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    if (document.getElementById("uploadImg")) {
    this.setState({img_url: (document.getElementById("uploadImg").src)}, ()=> {

      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    });
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
  }
  handleGuest(e){
    e.preventDefault();
      const user = {
        username: "CraftyCathy",
        password: "123456",
        email: "CathyLovesCrafts@gmail.com",
        img_url: "https://res.cloudinary.com/make-anything/image/upload/v1505927354/cu5caefnsmosykgwtoqw.png"
      };
      this.props.processForm(user);
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let onlySignup = "";
    let onlyLogin = "";
    if (this.props.formType === 'login') {
      onlySignup = "hidden";
    } else {
      onlyLogin = "hidden";
    }

    return (
      <div>

        <div className="form">
          <header>
              <h2 className={onlyLogin}>
                Login
              </h2>
              <h2 id="2" className={onlySignup}>
                Sign up
              </h2>
          </header>

          <form onSubmit={this.handleSubmit.bind(this)}>

              {this.renderErrors()}

            <tr className={onlySignup}>
              <td>
                <input type="text" placeholder="Email" onChange={this.handleInput('email')}
                  value={this.state.email}/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Username" onChange={this.handleInput('username')}
                  value={this.state.username}/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="password" placeholder="Password" onChange={this.handleInput('password')}
                  value={this.state.password}/>
              </td>
            </tr>
            <div className={onlySignup}>
              <PictureUpload/>
            </div>

            <tr>
              <td></td>
              <td>
                <div className={onlySignup}>
                  <input className="sessionbutton" type='submit' value={this.props.formType === 'login' ? 'Login' : 'Create Account'} />
                </div>
                <div className={onlyLogin}>
                  <button className="formloginbutton" onClick={this.handleSubmit.bind(this)}>Login</button>
                  <button className="formloginbutton" onClick={this.handleGuest.bind(this)}>Demo Log In!</button>
                </div>
              </td>
            </tr>
          </form>

          {
            this.props.formType === 'login' ? (
              <Link to="/signup" />
            ) : (
              <Link to="/login" />
            )
          }
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
