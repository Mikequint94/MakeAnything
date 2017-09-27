import React from 'react';
// import { Link } from 'react-router-dom';

export const CommentIndexItem = ({comment, key}) => {
  return (
    <div >
     <li key={comment.id + 'comment'}>{comment.user.username}</li>
    </div>
  );
};
