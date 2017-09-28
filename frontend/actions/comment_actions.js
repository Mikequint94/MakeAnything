import * as CommentUtil from '../util/comment_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestAllComments = (projectId) => dispatch => (
  CommentUtil.fetchAllComments(projectId)
  .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = data => dispatch => (
  CommentUtil.createComment(data)
    .then(comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteComment = data => dispatch => (
  CommentUtil.deleteComment(data)
    .then(comment => dispatch(removeComment(comment)))
);
