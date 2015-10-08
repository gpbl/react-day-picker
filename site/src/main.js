import React from "react";
import ReactDOM from "react-dom";

import reactTapEvent from "react-tap-event-plugin";
import Page from "./Page";

// enable touch-tap events
reactTapEvent();

import "./style/html.scss";

ReactDOM.render(<Page />, document.getElementById("root"));
