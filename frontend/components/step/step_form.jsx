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


  render(){
    console.log("HELLO");
      return(
      <form className="step-form">
        Create New Step <br />

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

        <button onClick={this.handleSubmit}>Add Step</button>
      </form>
    );
  }
}

export default StepForm;
