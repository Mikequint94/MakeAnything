import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from '../project/project_index_item';

class ProfileProjectsIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    console.log(this.props.match.params.memberId);
    this.props.requestUserProjects(this.props.match.params.memberId);
  }

  render(){
    let projectItems;
    projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );

    return(
      <main className="wrapper">
        <div className="memberindex section">
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
