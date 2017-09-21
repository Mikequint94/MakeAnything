import React from 'react';
import {Link, Route} from 'react-router-dom';

class ProjectShow extends React.Component{
  constructor(){
    console.log("projectShowstarted");
    super();
  }

  componentDidMount(){
    this.props.requestProject(this.props.match.params.projectName);
  }



  render(){
    console.log(this.props);
    let project = this.props.projects[this.props.match.params.projectName];
    console.log(project);
    return(
      <ul className="">
        <img src={project.img_url}></img>
        <li>{project.title}</li>
        <li>{project.description}</li>
      </ul>
    );
  }
}

export default ProjectShow;
