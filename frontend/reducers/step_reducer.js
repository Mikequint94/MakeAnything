import {RECEIVE_ALL_STEPS,
        RECEIVE_STEP
      } from '../actions/step_actions';

const initialState = {
  steps: [],
};

const stepReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_STEPS:
      newState = action.steps;
      return newState;
    case RECEIVE_STEP:
      newState[action.step.id] = action.step;
      return newState;
    default:
      return state;
  }
};

export default stepReducer;
