import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router-dom';

const SearchContainer = connect(
  null,
  null
)(Search);

export default withRouter(SearchContainer);
