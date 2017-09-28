import {
  RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS
} from '../actions/comment_actions';

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({});

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_COMMENT_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};
