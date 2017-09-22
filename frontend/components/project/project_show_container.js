import {receiveProject, requestProject, requestAllProjects} from '../../actions/project_actions';
import {requestAllSteps} from '../../actions/step_actions';
import {connect} from 'react-redux';
import ProjectShow from './project_show';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
  projects: state.entities.projects,
  project: state.entities.projects.undefined,
  steps: Object.keys(state.entities.steps).map(id => state.entities.steps[id])
});

const mapDispatchToProps = dispatch => ({
  requestAllSteps: (projectId) => dispatch(requestAllSteps(projectId)),
  requestAllProjects: () => dispatch(requestAllProjects()),
  requestProject: projectId => dispatch(requestProject(projectId)),
  receiveProject: projectId => dispatch(receiveProject(projectId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
