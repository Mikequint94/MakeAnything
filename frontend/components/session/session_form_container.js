import { connect } from 'react-redux';
import SessionForm from './session_form';

import {toggleLogin, toggleSignup} from '../../actions/toggle_actions';

import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session.errors,
  togglelogin: state.toggle.login,
  togglesignup: state.toggle.signup
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // processForm: /login/.test(ownProps.location.pathname) ?
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  toggleSignup: () => dispatch(toggleSignup()),
  toggleLogin: () => dispatch(toggleLogin())

});

const sessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default sessionFormContainer;
