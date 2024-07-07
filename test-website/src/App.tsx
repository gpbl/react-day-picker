import React from "react";

import * as Examples from "react-day-picker/examples";
import "react-day-picker/style.css";

import "./App.css";

function App() {
  const [example, setExample] = React.useState("Start");

  const Component: React.ComponentType = Examples[
    example as keyof typeof Examples
  ] as React.ComponentType;
  return (
    <>
      {/* create a select that allows to choose between the examples */}
      <label>
        Example:{" "}
        <select onChange={(e) => setExample(e.target.value)} value={example}>
          {Object.keys(Examples).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <div>
        <Component />
      </div>
    </>
  );
}

export default App;
