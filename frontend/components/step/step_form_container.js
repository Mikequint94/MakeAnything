import {connect} from 'react-redux';
// import {selectAllProjects} from '../../reducers/selectors';
import {createStep, receiveStep, requestAllSteps} from '../../actions/step_actions';
import StepForm from './step_form';

const mapStateToProps = state => ({
  // projects: Object.keys(state.entities.projects).map(id => state.entities.projects[id])
  // currentUser: state.session.currentUser,
  project: state.entities.projects.undefined
});

const mapDispatchToProps = dispatch => ({
  requestAllSteps: () => dispatch(requestAllSteps()),
  receiveStep: step => dispatch(receiveStep(step)),
  createStep: step => dispatch(createStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepForm);
