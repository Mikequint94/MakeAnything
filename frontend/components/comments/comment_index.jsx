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

  render(){
    let commentItems;
    if (this.props.comments.length === 0 && this.props.currentUser) {
      commentItems = "There are no comments on this project... yet.  Be the first!";
    } else if (this.props.comments.length === 0){
      commentItems = "There are no comments on this project... yet.  Log in to leave a comment!";
    } else {
      commentItems = this.props.comments.map(
        (comment) => <CommentIndexItem key={comment.id + "comment"} comment={comment}   />
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
}

export default CommentIndex;
