import React from "react";
import reactTapEvent from "react-tap-event-plugin";
import Page from "./Page";
import a11y from "react-a11y";

a11y(React);

// enable touch-tap events
reactTapEvent();

// inject css
require("./style/html.scss");

React.render(<Page />, document.getElementById("root"));
