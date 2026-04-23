import React, { useEffect, useState } from "react";

import * as Examples from "react-day-picker/examples";
import "react-day-picker/style.css";

import "./App.css";

const updateQueryString = (key: string, value: string) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  params.set(key, value);
  window.history.pushState({}, "", `${url.pathname}?${params.toString()}`);
};

function App() {
  const [example, setExample] = useState("Start");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("example");
    if (value) {
      setExample(value);
    }
  }, []);

  // biome-ignore lint: suspicious/noDynamicNamespaceImportAccess: not a concern
  const Component: React.ComponentType = Examples[
    example as keyof typeof Examples
  ] as React.ComponentType;
  return (
    <>
      {/* create a select that allows to choose between the examples */}
      <label>
        Example:{" "}
        <select
          name="example_name"
          onChange={(e) => {
            updateQueryString("example", e.target.value);
            setExample(e.target.value);
          }}
          value={example}
        >
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
