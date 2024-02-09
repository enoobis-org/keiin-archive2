import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppUseCallBack from "./useCallback/AppUseCallback";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <AppUseCallBack />
    <p>Все результаты смотреть через консоль!</p>
  </>
);
