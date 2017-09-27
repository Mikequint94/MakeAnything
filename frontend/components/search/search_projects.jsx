import React from 'react';
import {Route} from 'react-router-dom';

import {ProjectIndexItem} from '../project/project_index_item';

class SearchProjectsIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    // console.log(this.props.match.params.searchQuery);
    this.props.requestSearchProjects(this.props.match.params.searchQuery);
  }
  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    if (newProps.match.params.searchQuery !== this.props.match.params.searchQuery) {
      // console.log(newProps.match.params.searchQuery);
      this.props.requestSearchProjects(newProps.match.params.searchQuery);
    }
  }

  render(){
    let projectItems;

    projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );

    return(
      <main className="wrapper">
          <div className="memberindex section2">
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

export default SearchProjectsIndex;
