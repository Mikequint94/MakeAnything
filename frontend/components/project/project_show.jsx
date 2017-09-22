import React from 'react';
import {Link, Route} from 'react-router-dom';

class ProjectShow extends React.Component{
  constructor(){
    // console.log("projectShowstarted");
    super();
  }

  componentDidMount(){
    this.props.requestProject(this.props.match.params.projectName);
  }

  render(){
    // console.log(this.props);
    if (this.props.project) {
      let project = this.props.project.project;
      return(
        <div className="projectshow">
          <ul className="header">
            <li className="title">{project.title}</li>
            <li className="author">by: {project.author.username}</li>
          </ul>
          <ul className="pictextvid">
            <img src={project.img_url}></img>
            <h2>{project.description}</h2>
            <h2> Put Video Here.  {project.video_url}</h2>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="loadingtext">
          <h3>Loading</h3>
        </div>
      );
    }
  }
}

export default ProjectShow;
