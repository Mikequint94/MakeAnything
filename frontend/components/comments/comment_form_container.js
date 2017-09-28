import {connect} from 'react-redux';
import {createComment, receiveComment, requestAllComments, clearErrors} from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comment: state.entities.comments,
  errors: state.errors.project.errors,
  projectId: state.entities.projects.undefined.project.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveComment: comment => dispatch(receiveComment(comment)),
  requestAllComments: (projectId) => dispatch(requestAllComments(projectId)),
  createComment: comment => dispatch(createComment(comment)),

  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
