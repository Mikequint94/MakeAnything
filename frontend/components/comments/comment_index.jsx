import React from 'react';
import {Route} from 'react-router-dom';

import {CommentIndexItem} from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.requestAllComments(this.props.match.params.projectName);
  }
  handleDelete(comment) {
    if (confirm("Are you sure you want to delete your comment?") === true){
      this.props.deleteComment(comment);
    }
  }
  render(){
    let commentItems;
    if (this.props.comments.length === 0 && this.props.currentUser) {
      commentItems = "There are no comments on this project... yet.  Be the first!";
    } else if (this.props.comments.length === 0){
      commentItems = "There are no comments on this project... yet.  Log in to leave a comment!";
    } else {
      commentItems = this.props.comments.map(
        (comment) =>
          <div key={comment.id + "commentholder"}>
            <CommentIndexItem key={comment.id + "comment"} comment={comment}   />
            {
              this.commentDelete(comment)
            }

          </div>
    );
    }

    return(
        <div>
          <ul>
            {commentItems}
          </ul>
        </div>
    );
  }

  commentDelete(comment) {
    if (comment.user.id === this.props.currentUser.id) {
      return (
        <div className="comment-delete">
          <button onClick={this.handleDelete.bind(this, comment)}>
            <img  src="http://res.cloudinary.com/make-anything/image/upload/c_scale,h_24,w_22/v1506622268/trashcan_gg7suw.png" />
          </button>
        </div>
      );
    }
  }
}

export default CommentIndex;
