import React from 'react';
import {Link, Route} from 'react-router-dom';

class ProjectDetail extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.requestProject(this.props.match.params.projectName);
  }



  render(){
    console.log(this.props);
    // let project = this.props.projects[this.props.match.params.projectName];

    return(
      <ul className="">
        <img src={project.img_url}></img>
        <li>{project.title}</li>
        <li>{project.description}</li>
      </ul>
    );
  }
}

export default ProjectDetail;
