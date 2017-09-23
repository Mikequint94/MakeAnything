import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from './project_index_item';
// import ProjectShowContainer from './project_show_container';


class ProjectIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    // console.log("Requestion Projects");
    this.props.requestAllProjects();
  }

  render(){
    // // console.log("logging projects");
    // console.log(this.props.projects);
    let projectItems;
    projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );

    return(
      <main>
        <div className="section projectsindex">
          <ul>
            {projectItems}
          </ul>
          <div>
          </div>
        </div>
      </main>
    );
  }
}

export default ProjectIndex;
