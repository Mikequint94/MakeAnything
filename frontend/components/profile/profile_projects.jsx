import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from '../project/project_index_item';

class ProfileProjectsIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.props.requestUserProjects(this.props.currentUser.id);
  }

  render(){
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

export default ProfileProjectsIndex;
