import React from 'react';
// import { Link } from 'react-router-dom';

export const CommentIndexItem = ({comment}) => {
  return (
    <div>
     <li>{comment.body}</li>
     <li>
       <img src={comment.user.img_url} />
     </li>
     <li>{comment.user.username}</li>
    </div>
  );
};
