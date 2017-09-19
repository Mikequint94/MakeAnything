import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const initialState = {
  currentUser: null,
};

const sessionReducer =  (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = Object.assign({}, state);
      newState.currentUser = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
