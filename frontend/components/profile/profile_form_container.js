import { connect } from 'react-redux';
import ProfileForm from './profile_form';

import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

const sessionFormContainer = connect(
  null,
  mapDispatchToProps
)(ProfileForm);

export default sessionFormContainer;
