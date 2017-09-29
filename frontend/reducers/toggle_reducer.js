import {
  TOGGLE_LOGIN, TOGGLE_SIGNUP, TOGGLE_PROFILE
} from '../actions/toggle_actions';



export default (state = {login: false, signup: false, profile: false}, action) => {
  Object.freeze(state);
  const newState = Object.assign({});

  switch (action.type) {
    case TOGGLE_LOGIN:
      newState.login = !state.login;
      newState.signup = false;
      newState.profile = false;
      return newState;
    case TOGGLE_SIGNUP:
      newState.signup = !state.signup;
      newState.login = false;
      newState.profile = false;
      return newState;
    case TOGGLE_PROFILE:
      newState.profile = !state.profile;
      newState.login = false;
      newState.signup = false;
      return newState;
    default:
      return state;
  }
};
