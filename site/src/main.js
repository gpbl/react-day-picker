import React from "react";
import { render } from "react-dom";
import reactTapEvent from "react-tap-event-plugin";
import Page from "./Page";

// enable touch-tap events
reactTapEvent();

// inject css
require("./style/html.scss");

render(<Page />, document.getElementById("root"));
