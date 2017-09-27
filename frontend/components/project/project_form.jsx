import React from 'react';
import PictureUpload from '../session/picture_upload';
// import ReactQuill from 'react-quill';

class ProjectForm extends React.Component{
  constructor(props){
    super(props);
      // console.log(props);
      this.state = {
        title: "",
        img_url: "",
        video_url: "",
        description: "",
        author_id: this.props.currentUser.id,
      };


    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.formType === "edit") {
      this.state = {
        title: "",
        img_url: "",
        video_url: "",
        description: "",
        author_id: this.props.currentUser.id,
      };
      this.props.requestProject(this.props.match.params.projectId)
      .then(project => {
        this.setState({
          title: project.project.project.title,
          description: project.project.project.description,
          img_url: project.project.project.img_url,
          video_url: project.project.project.video_url,
          id: project.project.project.id
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
    // this.state.author_id = this.props.currentUser.id;
    // console.log(this.state);
    if (document.getElementById("uploadImg")) {
    this.setState({img_url: (document.getElementById("uploadImg").src)}, () =>{
      this.props.processForm(this.state)
      .then(()=> {
        if (this.props.formType === "create") {
          this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
        } else {
          this.props.history.push('');
          this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
        }
      });

    });
  } else {
    let createproj = this.props.processForm(this.state)
    .then(()=> {
      if (this.props.formType === "create") {
        this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
      } else {
        this.props.history.push('');
        this.props.history.push(`/projects/${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
      }    });
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
    let title;
    let submitbutton;
    let currentpic;
    let newpic;
    if (this.props.formType === "create") {
      title = (<li className="title">Create New Project</li>);
      submitbutton = (<button onClick={this.handleSubmit}>Create and Add Steps</button>);
      newpic = (
        <div className="currentpic">
        <PictureUpload disabledclick={true} preset={'newprojectpic'}/>
        </div>
      );
    } else {
      title = (<li className="title">Edit Project</li>);
      submitbutton = (<button onClick={this.handleSubmit}>Edit Project Info</button>);
      currentpic = (
        <div className="currentpic">
          <h3>Current Pic: </h3>
          <img src={this.state.img_url}/>
        </div>
      );
      newpic = (
        <div className="currentpic">
          <h3>New Pic: </h3>
          <PictureUpload disabledclick={true} preset={'newprojectpic'}/>
        </div>
      );
    }

    return(
      <form className="project-form">
        <div className="">
          <ul className="header">
            {title}
          </ul>
        </div>
        <ul className="pictextvid">
          <label><h2>Title:</h2>
              <input onChange={this.update('title')} value ={this.state.title}></input>
            </label>
            <br/>
            <label><h2>Description:</h2>
              <textarea onChange={this.update('description')} value={this.state.description}/>
            </label>
            <br/>
            <label><h2>Image:</h2>
              <div className="picuploadwidth">

                {currentpic}
                {newpic}

              </div>
            </label>
            <br/>
            <label><h2>Video URL (optional):</h2>
              <input onChange={this.update('video_url')} value={this.state.video_url}></input>
            </label>
            <br/>
              {this.renderErrors()}

            <br/>
            {submitbutton}
          </ul>

      </form>
    );
  }
}

export default ProjectForm;
