import {connect} from 'react-redux';
import {createStep, updateStep, receiveStep, requestAllSteps, clearErrors} from '../../actions/step_actions';
import StepForm from './step_form';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects.undefined,
  errors: state.errors.step.errors,
  formType: /edit/.test(ownProps.location.pathname) ? 'edit' : 'create'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllSteps: (projectId) => dispatch(requestAllSteps(projectId)),
  receiveStep: step => dispatch(receiveStep(step)),
  processForm: /edit/.test(ownProps.location.pathname) ?
  step => dispatch(updateStep(step)) :
  step => dispatch(createStep(step)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepForm);
