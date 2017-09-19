import { postSignup, postLogin, deleteLogout} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
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
