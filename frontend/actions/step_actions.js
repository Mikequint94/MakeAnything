import * as StepUtil from '../util/step_util';

export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';

export const RECEIVE_STEP_ERRORS = "RECEIVE_STEP_ERRORS";
export const CLEAR_STEP_ERRORS = "CLEAR_STEP_ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_STEP_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_STEP_ERRORS,
});

export const receiveAllSteps = steps => ({
  type: RECEIVE_ALL_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const requestAllSteps = (projectId) => dispatch => (
  StepUtil.fetchAllSteps(projectId)
  .then(steps => dispatch(receiveAllSteps(steps)))
);

export const createStep = data => dispatch => (
  StepUtil.createStep(data)
    .then(step => dispatch(receiveStep(step)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateStep = data => dispatch => (
  StepUtil.updateStep(data)
    .then(step => dispatch(receiveStep(step)),
    err => dispatch(receiveErrors(err.responseJSON)))
);
