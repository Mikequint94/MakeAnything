import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const greetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

export default greetingContainer;
