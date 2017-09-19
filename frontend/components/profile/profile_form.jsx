import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {

    return (
      <div className="form">
        <button className="logout" onClick={() => this.props.logout()}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(ProfileForm);
