import {
  TOGGLE_LOGIN, TOGGLE_SIGNUP
} from '../actions/toggle_actions';



export default (state = {login: false, signup: false}, action) => {
  Object.freeze(state);
  const newState = Object.assign({});

  switch (action.type) {
    case TOGGLE_LOGIN:
      newState.login = !state.login;
      newState.signup = false;
      return newState;
    case TOGGLE_SIGNUP:
      newState.signup = !state.signup;
      newState.login = false;
      return newState;
    default:
      return state;
  }
};
