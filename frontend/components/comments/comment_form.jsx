import React from 'react';
// import PictureUpload from '../session/picture_upload';
// import ReactQuill from 'react-quill';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        body: "",
        user_id: this.props.currentUser.id,
        project_id: this.props.projectId
      };
      // console.log(this.props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.createComment(this.state);
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


  render(){

    return(
      <form className="project-form">
        <div className="">
          <ul className="header">
            Comments
          </ul>
        </div>
        <ul className="pictextvid">
          <textarea onChange={this.update('body')}/>
            <br/>
              {this.renderErrors()}

            <br/>
            <div className="flexcomment">
              <li>Be Nice!  We have a nice comment policy.  Please be positive and constructive</li>
              <button onClick={this.handleSubmit.bind(this)}>Post Comment</button>
            </div>
          </ul>

      </form>
    );
  }
}

export default CommentForm;
