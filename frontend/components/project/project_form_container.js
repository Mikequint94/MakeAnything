import {connect} from 'react-redux';
import {selectAllProjects} from '../../reducers/selectors';
import {createProject, receiveProject, clearErrors} from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  project: state.entities.projects.undefined,
  errors: state.errors.project.errors,
});

const mapDispatchToProps = dispatch => ({
  // requestAllProjects: () => dispatch(requestAllProjects()),
  receiveProject: project => dispatch(receiveProject(project)),
  createProject: project => dispatch(createProject(project)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
