import * as StepUtil from '../util/step_util';

export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';

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
  StepUtil.createProject(data)
    .then(step => dispatch(receiveStep(step)))
);

export const updateStep = data => dispatch => (
  StepUtil.updateProject(data)
    .then(step => dispatch(receiveStep(step)))
);
