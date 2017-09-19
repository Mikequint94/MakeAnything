import {
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS
} from '../actions/session_actions';

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({});

  switch (action.type) {
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
