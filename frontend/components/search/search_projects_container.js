import { connect } from 'react-redux';
import SearchProjects from './search_projects';
import {receiveAllProjects, requestSearchProjects} from '../../actions/project_actions';

const mapStateToProps = state => ({
  projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])
});

const mapDispatchToProps = dispatch => ({
  requestSearchProjects: (query) => dispatch(requestSearchProjects(query)),
  receiveAllProjects: project => dispatch(receiveAllProjects(project)),
});

const SearchProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProjects);

export default SearchProjectsContainer;
