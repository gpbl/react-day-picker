import React from "react";
import reactTapEvent from "react-tap-event-plugin";
import Example from "./Example";

// enable touch-tap events
reactTapEvent();

// inject css
require("./style/Example.scss");
require("./style/DayPicker.scss");

React.render(<Example />, document.getElementById("root"));
