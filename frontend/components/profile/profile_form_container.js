import { connect } from 'react-redux';
import ProfileForm from './profile_form';

// import {toggleProfile} from '../../actions/toggle_actions';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  toggleprofile: state.toggle.profile
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
  // toggleProfile: () => dispatch(toggleProfile())
});

const profileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);

export default profileFormContainer;
