import React from 'react';
import './Feed.css';
import NavBar from '../../components/NavBar/NavBar';


const Feed = (props) => {

  return (
    <div>
      <NavBar 
        user={props.user}
      />
     <h1>Feed</h1>
  

    </div>

  )
}


export default Feed;