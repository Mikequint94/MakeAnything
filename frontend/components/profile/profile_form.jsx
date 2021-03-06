import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.formshow = "hidden";
    }

  render() {
    if (this.props.toggleprofile) {
      this.formshow = "form";
    } else {
      this.formshow = "hidden";
    }

    let profiledropdown;
    if (this.props.currentUser) {
      profiledropdown = (
        <div className={this.formshow}>
          <Link to={`/member/${this.props.currentUser.id}/${this.props.currentUser.username}/projects`}>
            <button onClick={this.props.toggleProfile.bind(this)} className="logoutbuttons">My Projects</button>
          </Link>
          <Link to="/projects/new">
            <button onClick={this.props.toggleProfile.bind(this)} className="logoutbuttons">Share New Project</button>
          </Link>
          <button className="logout" onClick={
              () => this.props.logout().then(() => {
                this.props.history.push("/");
                this.props.toggleProfile();
                this.props.clearErrors();
              }
            )
          }>Log Out</button>
        </div>
      );
    }
    return (
      <div>
        {profiledropdown}
      </div>
    );
  }
}

export default withRouter(ProfileForm);
