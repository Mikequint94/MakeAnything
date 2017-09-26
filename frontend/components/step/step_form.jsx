import React from 'react';
import PictureUpload from '../session/picture_upload';
// import ReactQuill from 'react-quill';

class StepForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      img_url: "",
      video_url: "",
      description: "",
      project_id: this.props.project.project.id,
      added: false
      };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    this.props.clearErrors();

    let element = document.getElementById("step-form");

    element.scrollIntoView(false);
    // console.log(document.body.scrollHeight - 500);
    // document.body.scrollTop = (document.body.scrollHeight);

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }
  convertToSlug(string) {
    if (string) {
      return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (document.getElementById("uploadImg")) {
    this.setState({img_url: (document.getElementById("uploadImg").src)}, () =>{
      this.props.createStep(this.state)
      .then(()=> {
        // window.location.reload();
          this.props.history.push(`${this.props.location.pathname.slice(0, -10)}`);
      });

    });
  } else {
    this.props.createStep(this.state)
    .then(()=> {
      // window.location.reload();
      this.props.history.push(`${this.props.location.pathname.slice(0, -10)}`);
    });
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

  render(){
      return(
      <form id="step-form" className="project-form">
        <ul className="header">
          <li className="title">
            Create New Step
          </li>
        </ul>
        <ul className="pictextvid">
          <h2>Title:</h2>
            <input onChange={this.update('title')}></input>


          <label><h2>Description:</h2>
            <textarea onChange={this.update('description')}/>
          </label>
          <br/>
          <label><h2>Image:</h2>
            <div>
              <PictureUpload disabledclick={true} preset={'newprojectpic'}/>
            </div>
          </label>
          <br/>
          <label><h2>Video Url (optional):</h2>
            <input onChange={this.update('video_url')}></input>
          </label>
          {this.renderErrors()}
          <br/>

          <button onClick={this.handleSubmit}>Add Step</button>
        </ul>
      </form>
    );
  }
}

export default StepForm;
