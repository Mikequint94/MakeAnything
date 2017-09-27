import {RECEIVE_ALL_COMMENTS,
        RECEIVE_COMMENT,
        REMOVE_COMMENT
      } from '../actions/comment_actions';

const commentReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      newState = action.comments;
      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
