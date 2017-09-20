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

  handleSubmit(event){
    event.preventDefault();
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
    if (this.props.formType === 'login') {
      onlySignup = "hidden";
    }
    let onlyLogin = "";
    if (this.props.formType === 'signup') {
      onlyLogin = "hidden";
    }

    return (
      <div>

        <div className="form">
          <header>
              <h2>
                {this.props.formType === 'login' ? 'Log in' : 'Sign up'}
              </h2>
          </header>

          <form onSubmit={this.handleSubmit.bind(this)}>

              {this.renderErrors()}

            <tr>
              <td>Username</td>
              <td>
                <input type="text" onChange={this.handleInput('username')}
                  value={this.state.username}/>
              </td>
            </tr>
            <tr className={onlySignup}>
              <td>Email</td>
              <td>
                <input type="text" onChange={this.handleInput('email')}
                  value={this.state.email}/>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" onChange={this.handleInput('password')}
                  value={this.state.password}/>
              </td>
            </tr>
            <div className={onlySignup}>
              <PictureUpload/>
            </div>

            <tr>
              <td></td>
              <td>
                <input className="sessionbutton" type='submit' value={this.props.formType + "!"} />
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
