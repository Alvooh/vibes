import React, { useState, useEffect } from "react";
import "./Question.css";

const Question = () => {
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  useEffect(() => {
    const moveButton = () => {
      const containerWidth = window.innerWidth - 100; // Adjust to the actual button size
      const containerHeight = window.innerHeight - 50; // Adjust to the actual button size

      const newTop = Math.random() * containerHeight + "px";
      const newLeft = Math.random() * containerWidth + "px";
      setPosition({ top: newTop, left: newLeft });
    };

    const intervalId = setInterval(() => {
      moveButton();
    }, 300); 

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleYesClick = () => {
    alert("I knew it doc you are gaaaaaaayyyyyyy!");
  };

  return (
    <div className="container">
      <h1 className="question">Are you gay Doc?</h1>
      <div className="buttons">
        <button className="yesButton" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="noButton"
          style={{ top: position.top, left: position.left }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Question;
