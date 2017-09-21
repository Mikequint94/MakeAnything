import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from './project_index_item';


class ProjectIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    this.props.requestAllProjects();
  }

  render(){
    console.log(this.props.projects);
    const projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id} project={project}   />
    );
    return(
      <div className="projectsindex">
        <ul>
          {projectItems}
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;
