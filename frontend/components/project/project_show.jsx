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
      let video;
      if (project.video_url) {
        // console.log(project.video_url);
        video = (
          <iframe
              className="videocontainer"
              width="500" height="350"
              src={`https://www.youtube.com/embed/${project.video_url.slice(32)}`}
              allowFullScreen
          />
        );
      }
      return(
        <div className="projectshow">
          <ul className="header">
            <li className="title">{project.title}</li>
            <li className="author">by: {project.author.username}</li>
          </ul>
          <ul className="pictextvid">
            <div className="picture">
              <img src={project.img_url}></img>
            </div>
            <h2>{project.description}</h2>
            <div className="video">
              {video}
            </div>


          </ul>
          <ul className="steps">
            {steps}
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
