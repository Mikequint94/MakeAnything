import React from 'react';
import {Route, Link} from 'react-router-dom';

import {ProjectIndexItem} from '../project/project_index_item';

class ProfileProjectsIndex extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.props.requestUserProjects(this.props.match.params.memberId);
  }

  render(){
    let projectItems;
    let profpic;
    if (this.props.projects && this.props.projects[0] && this.props.projects[0].author) {
      profpic = (
        <img className="resizepic" src={this.props.projects[0].author.img_url}></img>
      );
    }
    if (this.props.projects.length > 0) {
    projectItems = this.props.projects.map(
      (project) => <ProjectIndexItem key={project.id + "project"} project={project}   />
    );
  } else if (this.props.currentUser && this.props.match.params.memberName === this.props.currentUser.username){
    projectItems = (
      <div className="profilepage">
        <li className="emptysearch">no projects found...yet.</li>
        <li className="profilepage-button">
          <Link to="/projects/new">
            <button to="/projects/new" className="logoutbuttons">Share New Project</button>
          </Link>
        </li>
      </div>

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
              <li>Projects by {this.props.match.params.memberName}
              {profpic}</li>
            </div>

            {projectItems}
          </ul>
        </div>
      </main>
    );
  }
}

export default ProfileProjectsIndex;
