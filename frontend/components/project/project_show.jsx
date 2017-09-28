import React from 'react';
import {Link, Route} from 'react-router-dom';
import StepItem from './step_item';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';

class ProjectShow extends React.Component{
  constructor(){

    super();
  }

  componentDidMount(){
    this.props.requestProject(this.props.match.params.projectName)
      .then(project => {
        this.props.requestAllSteps(project.project.project.id);
      });
  }

  componentWillReceiveProps(newProps){
    // debugger
    // if (newProps.match.params.projectName === this.props.match.params.projectName) {
    // this.props.requestAllSteps(parseInt(newProps.match.params.projectName));
    // }
  }
  addStep(){
    console.log(this.props);
    if (this.props.location.pathname.slice(-10) !== "/steps/new") {
    this.props.history.push(`${this.props.location.pathname}` + `/steps/new`);
    }
  }
  editProject(){
    console.log(this.props);
    this.props.history.push(`${this.props.location.pathname}` + `/edit`);
  }
  editStep(idx, step){
    this.props.history.push(`${this.props.location.pathname}` + `/${step.id}`+`/step${idx + 1}` +`/edit`);
  }
  render(){
    let comments;
    if (this.props.currentUser) {
      comments = (
        <div>
          <CommentFormContainer />
        </div>
      );
    }
    if (this.props.project && this.props.steps) {
      console.log(this.props);
      let project = this.props.project.project;
      let steps;
      let owner = false;
      if (this.props.currentUser && project.author.id === this.props.currentUser.id) {
        owner = true;
      }
      if (this.props.steps.length > 0 && owner) {
        steps = this.props.steps.map((step, idx) => (
          <div  key={step.id + "step"}>
            <StepItem step={step} stepnum={idx + 1}/>
            <button className="steps-edit-step" onClick={this.editStep.bind(this, idx, step)}>Edit</button>
        </div>
        ));
      } else if (this.props.steps.length > 0){
        steps = this.props.steps.map((step, idx) => (
          <div key={step.id + "step"}>
            <StepItem step={step} stepnum={idx + 1}/>
          </div>
        ));

      } else {
        steps = "No steps have been created for this project... yet.";
      }
      let image;
      if (project.img_url) {
        image= (
        <div className="picture moveright">
          <img src={project.img_url}></img>
        </div>
        );
      }
      let video;
      if (project.video_url) {
        // console.log(project.video_url);
        video = (
          <div className="video moveright">
            <iframe
                className="videocontainer"
                width="500" height="350"
                src={`https://www.youtube.com/embed/${project.video_url.slice(32)}`}
                allowFullScreen
            />
        </div>
        );
      }
      let addSteps;
      let editproject;
      let titleclass = "title";
      let authorclass = "author";
      if (this.props.currentUser && project.author.id === this.props.currentUser.id){
        titleclass = "title-edit";
        authorclass = "author-edit";

        addSteps = (
          <div>
            <button onClick={
                this.addStep.bind(this)
              }>Add Step</button>

          </div>
        );
        editproject = (
          <div>
            <button onClick={this.editProject.bind(this)}>Edit</button>
          </div>
        );
      }

      return(
        <div className="projectshow">
          <ul className="header">
            <li className="steps-edit">
              {editproject}
            </li>
            <li className={titleclass}>{project.title}</li>
            <li className={authorclass}>by:
              <Link to={`/member/${project.author.id}/${project.author.username}/projects`}>  {project.author.username}</Link>
            </li>
          </ul>
          <ul className="pictextvid">
            {image}
            <h2>{project.description}</h2>
            {video}


          </ul>
          <ul className="steps">

            {steps}
            <br/>
            {addSteps}
          </ul>
          <div className="comment-form">
            {comments}
            <CommentIndexContainer />
          </div>
        </div>
      );
    } else {
        return(
          <div className="loadingtext">
            <h3>Loading</h3>
          </div>
        );
    }
  }
}

export default ProjectShow;
