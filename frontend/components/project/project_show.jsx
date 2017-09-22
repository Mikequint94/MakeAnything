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
      // console.log(project.author);
      return(
        <div className="projectshow">
          <ul className="header">
            <li className="title">{project.title}</li>
            <li className="author">by: {project.author.username}</li>
          </ul>
          <img src={project.img_url}></img>
          <li>{project.description}</li>
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
