import { useMemo, useCallback, useState, useEffect } from "react";
import React from "react";
import Count from "./components/Count";
import IsFive from "./components/IsFive";
import "./App.css";

function App() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  return (
    <div className="App">
      <h2>Пример с использованием хука UseMemo</h2>
      <h3>Первый счетчик: </h3>
      <div>
        <button
          onClick={() => {
            setFirstCount(firstCount + 1);
          }}
        >
          +
        </button>
        <Count value={firstCount} id={1} />
      </div>
      <h3>Второй счетчик: </h3>
      <div>
        <button
          onClick={() => {
            setSecondCount(secondCount + 1);
          }}
        >
          -
        </button>
        <Count value={secondCount} id={2} />
        <IsFive value={secondCount} />
      </div>
    </div>
  );
}

export default App;
