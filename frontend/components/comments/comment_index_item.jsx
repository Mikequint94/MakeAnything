import React from 'react';
import { Link } from 'react-router-dom';

export const CommentIndexItem = ({comment}) => {

  return (
    <div >
      <li>{comment.body}</li>
      <li>by: {comment.user.username}</li>
    </div>
  );
};
