import React from 'react';
import {Route} from 'react-router-dom';

import {CommentIndexItem} from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    console.log(this.props);
    // debugger
    this.props.requestAllComments(this.props.match.params.projectName);
  }
  componentWillUnmount(){
    console.log("sdlfhalsdufhasdiufhasdoufuadsifhouiarfhaosuidfhasdouif");
    // debugger
  }

  render(){
    let commentItems;
    console.log(this.props.comments);
    if (this.props.comments.length === 0) {
      commentItems = "There are no comments on this project... yet.  Be the first!";
    }
    commentItems = this.props.comments.map(
      (comment) => <CommentIndexItem key={comment.id + "comment"} comment={comment}   />
    );

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
