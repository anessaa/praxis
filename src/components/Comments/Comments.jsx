// import React, {Component} from 'react';
import React from 'react';

const Comments = (props) => {
  return (
    <div>
      {props.comment.remark}

      {/* <p>{this.props.practicePost.comments.map(remark remarks[0]}</p> */}
      {/* {this.props.practicePost ? this.props.practicePost.comments.map(remark => <p>{this.props.practicePost.remark}</p>) : <h1>Loading</h1>} */}

      {/* {props.practicePost ? props.practicePost.forEach((remark,idx) => {
        {remark}
      })     : <h4>Loading</h4>
      } */}
    </div>
  ) 
}

export default Comments;