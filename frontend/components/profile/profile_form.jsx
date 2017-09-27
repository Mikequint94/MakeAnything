import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    }

  // handleNewProject(e){
  //   e.preventDefault();
  //   Link to="/projects/new"
  //   return(
  //   );
  // }

  render() {

    return (
      <div className="form">
        <Link to={`/member/${this.props.currentUser.id}/${this.props.currentUser.username}/projects`}>
          <button className="logoutbuttons">My Projects</button>
        </Link>
        <Link to="/projects/new">
          <button to="/projects/new" className="logoutbuttons">Share New Project</button>
        </Link>
        <button className="logout" onClick={
            () => this.props.logout().then(this.props.history.push("/"))
          }>Log Out</button>
      </div>
    );
  }
}

export default withRouter(ProfileForm);
