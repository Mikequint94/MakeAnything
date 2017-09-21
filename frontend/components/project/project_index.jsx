import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from './project_index_item';
import ProjectShowContainer from './project_show_container';


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
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );
    // this.props.projects.map(
    //   (project) => console.log(project.id)
    // );
    return(
      <main>
        <div className="section projectsindex">
          <ul>
            {projectItems}
          </ul>
          <div>
            <Route path="/projects/:projectName" component={ProjectShowContainer}/>
          </div>
        </div>
      </main>
    );
  }
}

export default ProjectIndex;
