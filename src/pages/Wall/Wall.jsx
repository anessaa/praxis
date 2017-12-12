import React from 'react';
import './Wall.css';
import NavBar from '../../components/NavBar/NavBar';
import Lesson from '../../components/Lesson/Lesson';
import PracticePost from '../../components/PracticePost/PracticePost';

const Wall = (props) => {

  return (
    <div>
      <NavBar 
        user={props.user}
      />
     <h1>Wall</h1>
     <PracticePost {...props}/>
     <Lesson {...props}/>
    </div>
  );
}

export default Wall;