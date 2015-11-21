import React from "react";
import DayPicker from "react-day-picker";
import reactTapEvent from "react-tap-event-plugin";

// enable touch-tap events
reactTapEvent();

import "react-day-picker/lib/style.css";

export default function TouchEvents() {
  return <DayPicker onDayTouchTap={ (e, day) => alert(`You touched ${day}`) } />;
}
