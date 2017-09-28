import { connect } from 'react-redux';
import ProfileProjects from './profile_projects';
import {receiveAllProjects, requestUserProjects} from '../../actions/project_actions';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])
});

const mapDispatchToProps = dispatch => ({
  requestUserProjects: (author_id) => dispatch(requestUserProjects(author_id)),
  receiveAllProjects: project => dispatch(receiveAllProjects(project)),
});

const ProfileProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileProjects);

export default ProfileProjectsContainer;
