import {connect} from 'react-redux';
import {createProject, updateProject, receiveProject, requestProject, clearErrors} from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  project: state.entities.projects.undefined,
  errors: state.errors.project.errors,
  formType: /edit/.test(ownProps.location.pathname) ? 'edit' : 'create'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveProject: project => dispatch(receiveProject(project)),
  requestProject: projectId => dispatch(requestProject(projectId)),
  processForm: /edit/.test(ownProps.location.pathname) ?
  project => dispatch(updateProject(project)) :
  project => dispatch(createProject(project)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
