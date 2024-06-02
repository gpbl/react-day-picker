import React from "react";

import { type DayProps, DayPicker } from "react-day-picker";

function HighlightedDay(props: DayProps) {
  return (
    <div {...props.rootProps}>
      {props.day.date.getDate() === 19 && ` 🎉`}
      {props.children}
    </div>
  );
}

export function CustomDayDate() {
  return <DayPicker mode="single" components={{ DayDate: HighlightedDay }} />;
}
