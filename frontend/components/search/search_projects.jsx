import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from '../project/project_index_item';

class SearchProjectsIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.props.requestSearchProjects(this.props.match.params.searchQuery);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.searchQuery !== this.props.match.params.searchQuery) {
      this.props.requestSearchProjects(newProps.match.params.searchQuery);
    }
  }

  render(){
    let projectItems;
    if (this.props.projects.length > 0) {
    projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );
  } else {
    projectItems = (
      <li className="emptysearch">no projects found</li>
    );
  }
    return(
      <main className="wrapper">
          <div className="memberindex section2">
            <ul>
              <div className="memberProfName">
                <li>{this.props.match.params.searchQuery}</li>
              </div>
              {projectItems}
            </ul>
            <div>
            </div>
          </div>
      </main>
    );
  }
}

export default SearchProjectsIndex;
