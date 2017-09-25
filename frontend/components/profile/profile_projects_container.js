import { connect } from 'react-redux';
import ProfileProjects from './profile_projects';
import {receiveAllProjects, requestUserProjects} from '../../actions/project_actions';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUserProjects: () => dispatch(requestUserProjects()),
  receiveAllProjects: project => dispatch(receiveAllProjects(project)),
});

const ProfileProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileProjects);

export default ProfileProjectsContainer;
