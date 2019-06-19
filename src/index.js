import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import DelphinaComponent from "./MyComponent.js";
import DelphinaProfileObj from "./MyProfile";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DelphinaComponent delphina={DelphinaProfileObj} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
