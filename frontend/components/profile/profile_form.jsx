import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.formshow = "hidden";
    }

  render() {
    console.log(this.props.toggleprofile);
    if (this.props.toggleprofile) {
      this.formshow = "form";
    } else {
      this.formshow = "hidden";
    }
    console.log(this.formshow);
    return (
      <div className={this.formshow}>
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
