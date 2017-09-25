import { connect } from 'react-redux';
import ProfileForm from './profile_form';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

const sessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);

export default sessionFormContainer;
