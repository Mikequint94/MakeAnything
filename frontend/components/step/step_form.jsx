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
      project_id: this.props.project.project.id
      };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    this.props.clearErrors();
    let element = document.getElementById("step-form");
    element.scrollIntoView(false);
    console.log(this.props);
    if (this.props.formType === "edit") {
      this.props.requestAllSteps(this.state.project_id)
      .then(steps => {
        this.setState({
          title: steps.steps[this.props.match.params.stepId].title,
          description: steps.steps[this.props.match.params.stepId].description,
          img_url: steps.steps[this.props.match.params.stepId].img_url || null,
          video_url: steps.steps[this.props.match.params.stepId].video_url || null,
          id: steps.steps[this.props.match.params.stepId].id
        });
      });
    }
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
      this.props.processForm(this.state)
      .then(()=> {
          this.props.history.push(``);
          this.props.history.push(`projects/${this.props.match.params.projectId}/${this.props.match.params.projectName}`);
      });

    });
  } else {
    this.props.processForm(this.state)
    .then(()=> {
      this.props.history.push('');
      this.props.history.push(`projects/${this.props.match.params.projectId}/${this.props.match.params.projectName}`);
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
    let title = (
      <li className="title">
        Edit Step
      </li>
    );
    let submitbutton = (<button onClick={this.handleSubmit}>Edit Step</button>);
    let newpic = (
      <div className="currentpic">
        <h3>New Pic: </h3>
        <PictureUpload disabledclick={true} preset={'newprojectpic'}/>
      </div>
    );
    let currentpic = (
      <div className="currentpic">
        <h3>Current Pic: </h3>
        <img src={this.state.img_url}/>
      </div>
    );
    if (this.props.formType === "create") {
      currentpic = undefined;
      title = (<li className="title">
        Create New Step
      </li>);
      submitbutton = (<button onClick={this.handleSubmit}>Add Step</button>);
      newpic = (
        <div className="currentpic">
        <PictureUpload disabledclick={true} preset={'newprojectpic'}/>
        </div>
      );

    }
      return(
      <form id="step-form" className="project-form">
        <ul className="header">
          {title}
        </ul>
        <ul className="pictextvid">
          <h2>Title:</h2>
            <input onChange={this.update('title')} value={this.state.title}></input>


          <label><h2>Description:</h2>
            <textarea onChange={this.update('description')} value={this.state.description}/>
          </label>
          <br/>
          <label><h2>Image:</h2>
            <div>
              {currentpic}
              {newpic}
            </div>
          </label>
          <br/>
          <label><h2>Video Url (optional):</h2>
            <input onChange={this.update('video_url')}  value={this.state.video_url}></input>
          </label>
          {this.renderErrors()}
          <br/>

          {submitbutton}
        </ul>
      </form>
    );
  }
}

export default StepForm;
