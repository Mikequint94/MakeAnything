import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {receiveAllComments, requestAllComments, deleteComment} from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id])
});

const mapDispatchToProps = dispatch => ({
  requestAllComments: (projectId) => dispatch(requestAllComments(projectId)),
  receiveAllComments: comment => dispatch(receiveAllComments(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex));
