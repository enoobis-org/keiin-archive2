import React, { useState } from "react";

const ColorSquare = (props) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: props.color,
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    ></div>
  );
};

function App() {
  const [square1, setSquare1] = useState("red");
  const [square2, setSquare2] = useState("blue");

  const handleClick = (num) => {
    if (num === 1) {
      setSquare1(square1 === "red" ? "blue" : "red");
    } else {
      setSquare2(square2 === "red" ? "blue" : "red");
    }
  };
  return (
    <div>
      <ColorSquare color={square1} onClick={() => handleClick(1)} />
      <ColorSquare color={square2} onClick={() => handleClick(2)} />
    </div>
  );
}

export default App;
