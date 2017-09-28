import { postSignup, postLogin, deleteLogout} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const login = (formUser) => dispatch => {
  return postLogin(formUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON))));
};

export const logout = () => dispatch => {
  return deleteLogout()
      .then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = (formUser) => dispatch => {
  return postSignup(formUser).then(user => (dispatch(receiveCurrentUser(user))),
  err => (dispatch(receiveErrors(err.responseJSON))));
};
