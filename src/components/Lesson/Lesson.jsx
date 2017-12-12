import React from 'react';
import './Lesson.css';
import Metronome from './../../components/Metronome/Metronome'
// lessons = [ 
//  {
//    number: 1,
//    name: "lesson 1",
//    scale: "major",
//    steps: ["1", "2", "3", "4", "5", "6", "7"]
//  },
//  { 
//    number: 2,
//    name: "lesson 2",
//    scale: "minor",
//    steps: ["1", "2", "b3", "4", "5", "b6", "b7"]
//  }
// ]

const Lesson = (props) => {
 
  return (
    <div className="container">
      <div className="Lesson-border">
      
        <div className="Lesson-content">
            {/* <h4>{props.lesson.name}</h4>
              <ol>
                <li>{props.lesson.scale}</li>
              </ol> */}

          <Metronome />
        </div>
      </div>
    </div>
    );
};

export default Lesson;
        
        
        
        
        
        





        
        
    