import React from 'react';
import PictureUpload from '../session/picture_upload';
import ReactQuill from 'react-quill';

class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      img_url: "",
      video_url: "",
      description: "",
      author_id: this.props.currentUser.id,
      // step1: "",
      // step2: "",
      // step3: ""
      };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.addStep = this.addStep.bind(this);
    // let stepnum=1;
    // this.steps = undefined;
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
      this.props.createProject(this.state)
      .then(this.timer = setTimeout(()=> {
        this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
      }, 1000)
    );

    });
  } else {
    this.props.createProject(this.state)
    .then(this.timer = setTimeout(()=> {
      this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
    }, 1000)
  );
  }
  }


  // handleChange(value) {
  //   this.setState({ step: value });
  // }
  // addStep() {
  //   console.log(this.state);
  //    this.steps += (
  //   <label> stepnum
  //     <input type="text" onChange={this.update('step1')}></input>
  //   </label> );
  //   console.log(this.steps);
  // }

  render(){

    return(
      <form className="project-form">
        Create New Project <br />

      <label>Title:
          <input onChange={this.update('title')}></input>
        </label>
        <br/>
        <label>Description:
          <input onChange={this.update('description')}></input>
        </label>
        <br/>
        <label>Image (optional):
          <PictureUpload preset={'newprojectpic'}/>
        </label>
        <br/>
        <label>Video (optional url):
          <input onChange={this.update('video_url')}></input>
        </label>
        <br/>

        <button onClick={this.addStep}>Add Step</button>
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default ProjectForm;
