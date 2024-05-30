import React from "react";

import { type DayProps, DayPicker } from "react-day-picker";

function HighlightedDay(props: DayProps) {
  return (
    <div {...props.htmlAttributes}>
      {props.day.date.getDate() === 19 && ` 🎉`}
      {props.children}
    </div>
  );
}

export function CustomDay() {
  return <DayPicker mode="single" components={{ Day: HighlightedDay }} />;
}
