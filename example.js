import React from "react";
import { render } from "react-dom";
import Checkbox from "./examples/checkbox";
import CheckActive from "./examples/checkActive";
import TimeInterval from "./examples/timeInterval";
import DisplayMap from "./examples/displayMap";

const changeFn = val => console.log(`It changed to ${val}`);

function App() {
  return (
    <div className="App">
      <div className="section">
        <div className="title">useToggle</div>
        <Checkbox initialValue>Power - toggler</Checkbox>
      </div>
      <div className="section">
        <div className="title">useActive</div>
        <CheckActive onChange={changeFn} />
      </div>

      <div className="section">
        <TimeInterval />
      </div>
      <div className="section">
        <DisplayMap />
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
