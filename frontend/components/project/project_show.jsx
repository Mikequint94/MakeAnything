import React from 'react';
import {Link, Route} from 'react-router-dom';
import StepItem from './step_item';

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
    this.props.history.push(`${this.props.location.pathname}` + `/steps/new`);
    // window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }
  render(){



    if (this.props.project && this.props.steps) {
      console.log(this.props);
      let project = this.props.project.project;
      let steps;
      if (this.props.steps[0].id) {
        steps = this.props.steps.map((step, idx) => (
          <StepItem key={step.id + "step"} step={step} stepnum={idx + 1}/>
        ));
      } else {
        steps = this.props.steps[0];
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
      if (this.props.currentUser && project.author.id === this.props.currentUser.id){
        addSteps = (
          <div>
            <button onClick={
                this.addStep.bind(this)
              }>Add Step</button>

          </div>
        );
      }
      return(
        <div className="projectshow">
          <ul className="header">
            <li className="title">{project.title}</li>
            <li className="author">by:
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
