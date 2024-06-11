import React from "react";
import '../assets/CSS/index.css';


const RandomCharacter = ({ setCharacter }) => {
  const handleRandom = () => {
    setCharacter("mario");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Random Character</h5>
        <button className="btn btn-primary" onClick={handleRandom}>
          Get Random Character
        </button>
      </div>
    </div>
  );
};

export default RandomCharacter;
