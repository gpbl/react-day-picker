import React from "react";

import { type DayProps, DayPicker, DayDateProps } from "react-day-picker";

function HighlightedDay(props: DayDateProps) {
  return (
    <span {...props.rootProps}>
      {props.day.date.getDate() === 19 && ` 🎉`}
      {props.formattedDate}
    </span>
  );
}

export function CustomDayDate() {
  return <DayPicker mode="single" components={{ DayDate: HighlightedDay }} />;
}
