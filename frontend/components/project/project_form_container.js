import {connect} from 'react-redux';
import {selectAllProjects} from '../../reducers/selectors';
import {createProject, receiveProject} from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
  // projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])
  currentUser: state.session.currentUser,
  project: state.entities.projects.undefined
});

const mapDispatchToProps = dispatch => ({
  // requestAllProjects: () => dispatch(requestAllProjects()),
  receiveProject: project => dispatch(receiveProject(project)),
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
