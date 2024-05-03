import React from "react";

import { DayPicker } from "react-day-picker";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  DayPicker,
  ...React
};

console.log(ReactLiveScope);
export default ReactLiveScope;
