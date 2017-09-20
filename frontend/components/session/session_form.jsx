import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'qdjvouky';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/make-anything/upload';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      uploadedFileCloudinaryUrl: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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




    let emailClass = "";
    if (this.props.formType === 'login') {
      emailClass = "hidden";
    }

    return (
      <div>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <div>
          <div className="FileUpload">
            ...
          </div>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
          </div>
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
            <tr className={emailClass}>
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
