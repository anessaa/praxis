import React from 'react';

const Comments = (props) => {
  return (
    <div>
      {props.comment.remark} - {props.comment.author.name}
  
    </div>
  ) 
}

export default Comments;