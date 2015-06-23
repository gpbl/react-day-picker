import React from "react";
import reactTapEvent from "react-tap-event-plugin";
import Page from "./Page";

// enable touch-tap events
reactTapEvent();

// inject css
require("./style/html.scss");

React.render(<Page />, document.getElementById("root"));
