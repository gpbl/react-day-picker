import React from "react";
import ReactDOM from "react-dom";

import reactTapEvent from "react-tap-event-plugin";
import Examples from "./Examples";
import "./styles/main.css";

// enable touch-tap events
reactTapEvent();

ReactDOM.render(<Examples />, document.getElementById("root"));
