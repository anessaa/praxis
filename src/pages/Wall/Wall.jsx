import React from 'react';
import './Wall.css';
import NavBar from '../../components/NavBar/NavBar';
import Lesson from '../../components/Lesson/Lesson';


const Wall = (props) => {

  return (
    <div>
      <NavBar 
        user={props.user}
      />
     <h1>User Wall</h1>
     <Lesson  
    
      {...props}
     />

    </div>

  )
}


export default Wall;