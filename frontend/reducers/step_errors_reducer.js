import {
  RECEIVE_STEP_ERRORS, CLEAR_STEP_ERRORS
} from '../actions/step_actions';

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({});

  switch (action.type) {
    case RECEIVE_STEP_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_STEP_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};
