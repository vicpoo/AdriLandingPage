import React from "react";
import "./Description.css";
import { descriptionData } from '../../data/Description';

function Description() {
  return (
    <div className="description-container">
      <div className="description-text">
        <p>{descriptionData.text}</p>
      </div>
    </div>
  );
}

export default Description;