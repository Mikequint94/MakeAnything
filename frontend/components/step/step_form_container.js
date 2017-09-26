import {connect} from 'react-redux';
// import {selectAllProjects} from '../../reducers/selectors';
import {createStep, receiveStep, requestAllSteps, clearErrors} from '../../actions/step_actions';
import StepForm from './step_form';

const mapStateToProps = state => ({
  project: state.entities.projects.undefined,
  errors: state.errors.step.errors,
});

const mapDispatchToProps = dispatch => ({
  requestAllSteps: () => dispatch(requestAllSteps()),
  receiveStep: step => dispatch(receiveStep(step)),
  createStep: step => dispatch(createStep(step)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepForm);
