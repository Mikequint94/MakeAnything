import {connect} from 'react-redux';
import {selectAllProjects} from '../../reducers/selectors';
import {receiveAllProjects, requestAllProjects} from '../../actions/project_actions';
import ProjectIndex from './project_index';

const mapStateToProps = state => ({
  projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])
});

const mapDispatchToProps = dispatch => ({
  requestAllProjects: () => dispatch(requestAllProjects()),
  receiveAllProjects: project => dispatch(receiveAllProjects(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
