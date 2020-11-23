import React from "react";
import ReactDOM from "react-dom";
import {Greetings} from "./components/Greetings.jsx";

const App = () => (
<div>
  <h1>Hello React</h1>
  <Greetings />
  <p>Minimal React configuration.</p>
  <p>Testing component</p>
</div>
)

ReactDOM.render(<App />, document.getElementById("root"))