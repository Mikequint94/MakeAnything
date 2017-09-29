import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from './project_index_item';

class ProjectIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.props.requestAllProjects();
  }

  render(){
    let projectItems;
    projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );

    return(
      <main>
        <div className="section2 projectsindex">
          <ul>
            {projectItems}
          </ul>
        </div>
      </main>
    );
  }
}

export default ProjectIndex;
