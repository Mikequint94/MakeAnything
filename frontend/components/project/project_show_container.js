import {receiveProject, requestProject} from '../../actions/project_actions';
import {connect} from 'react-redux';
import ProjectShow from './project_show';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
  projects: state.entities.projects,
});

const mapDispatchToProps = dispatch => ({
  requestProject: projectId => dispatch(requestProject(projectId)),
  receiveProject: projectId => dispatch(receiveProject(projectId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
