export const fetchAllComments = (project_id) => {
  return  $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: {comment: {project_id}}
  });
};

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {comment}
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
);
