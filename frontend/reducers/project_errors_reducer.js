import {
  RECEIVE_PROJECT_ERRORS, CLEAR_PROJECT_ERRORS
} from '../actions/project_actions';

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({});

  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_PROJECT_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};
