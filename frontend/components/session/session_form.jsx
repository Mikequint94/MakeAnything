import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      username: "",
      password: "",
      email: ""
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

  handleSubmit(event){
    event.preventDefault();
    const user = Object.assign({}, this.state);

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

    return (
      <div className="form">
        <header>
            <h1>
              {this.props.formType === 'login' ? 'Log in' : 'Sign up'}
            </h1>
        </header>

        <form onSubmit={this.handleSubmit.bind(this)}>

            {this.renderErrors()}


          <label>
            Username
            <input type="text" onChange={this.handleInput('username')}
                               value={this.state.username}/>
          </label>
          <br/>
          <label>
            Email
            <input type="text" onChange={this.handleInput('email')}
                               value={this.state.email}/>
          </label>
          <br/>
          <label>
            Password
            <input type="password" onChange={this.handleInput('password')}
                                   value={this.state.password}/>
          </label>
          <br/>

          <input type='submit' value={this.props.formType + "!"} />
        </form>

        {
          this.props.formType === 'login' ? (
            <Link to="/signup" />
          ) : (
            <Link to="/login" />
          )
        }
      </div>
    );
  }
}

export default withRouter(SessionForm);
