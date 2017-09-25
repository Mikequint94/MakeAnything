import React from 'react';
import PictureUpload from '../session/picture_upload';
// import ReactQuill from 'react-quill';

class ProjectForm extends React.Component{
  constructor(props){
    super(props);
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
      .then(()=> {
        this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
      });

    });
  } else {
    this.props.createProject(this.state)
    .then(()=> {
      this.props.history.push(`${this.props.project.project.id}/` +`${this.convertToSlug(this.state.title)}` );
    });
  }
  }


  render(){
    // debugger
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
        <label>Image:
          <div>
            <PictureUpload disabledclick={true} preset={'newprojectpic'}/>
          </div>
        </label>
        <br/>
        <label>Video Url (optional):
          <input onChange={this.update('video_url')}></input>
        </label>
        <br/>

        <button onClick={this.handleSubmit}>Create Project and Add Steps</button>
      </form>
    );
  }
}

export default ProjectForm;
