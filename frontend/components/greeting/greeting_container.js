import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Greeting from './greeting';

import {toggleLogin, toggleSignup} from '../../actions/toggle_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleSignup: () => dispatch(toggleSignup()),
  toggleLogin: () => dispatch(toggleLogin())
});

const greetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

export default withRouter(greetingContainer);
