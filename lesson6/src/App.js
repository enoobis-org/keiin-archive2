import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const [red, setRed] = useState("black");
  const [green, setGreen] = useState("black");
  const [yellow, setYellow] = useState("black");

  useEffect(() => {
    setRed(first ? "red" : "black");
    setGreen(second ? "green" : "black");
    setYellow(third ? "yellow" : "black");
  }, [first, second, third]);

  return (
    <>
      <button
        onClick={() => setFirst(!first)}
        style={{ backgroundColor: first ? "red" : "white" }}
      >
        first
      </button>
      <button
        onClick={() => setSecond(!second)}
        style={{ backgroundColor: second ? "green" : "white" }}
      >
        second
      </button>
      <button
        onClick={() => setThird(!third)}
        style={{ backgroundColor: third ? "yellow" : "white" }}
      >
        third
      </button>

      <h1 style={{ color: red }}>Color Will Change</h1>
      <h1 style={{ color: green }}>Color Will Change</h1>
      <h1 style={{ color: yellow }}>Color Will Change</h1>
    </>
  );
}

export default App;
