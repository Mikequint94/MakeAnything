import React from 'react';
import { Link } from 'react-router-dom';


export const CommentIndexItem = ({comment}) => {
  return (
    <div className="comment-item">
      <div className="comment-left">
        <img src={comment.user.img_url} />
      </div>
      <div className="comment-right">
        <Link to={`/member/` + comment.user.id +`/` + comment.user.username + '/projects'} >
          <li>{comment.user.username}</li>
        </Link>
          <li>{comment.body}</li>
      </div>
    </div>
  );
};
