import { connect } from 'react-redux';
import ProfileForm from './profile_form';

import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  // loggedIn: Boolean(state.session.currentUser),
  // errors: state.errors.session.errors,
  // formType: /login/.test(ownProps.location.pathname) ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

const sessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);

export default sessionFormContainer;
