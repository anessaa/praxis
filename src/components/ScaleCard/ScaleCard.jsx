import React from 'react';
import './ScaleCard.css';

const ScaleCard = (props) => {
  return (
    <div>
      <div className="ScaleCard-cards">
      <h4>{props.scale.scale}</h4>
      <h5>Scale steps : {props.scale.steps}</h5>
      <div className="ScaleCard-diagram">
        <img src={props.scale.diagram} />
      </div>
      </div>
    </div>
  ) 
}

export default ScaleCard;