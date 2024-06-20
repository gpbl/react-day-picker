import React from "react";

import { DayPicker, type DayDateProps } from "react-day-picker";

function HighlightDay(props: DayDateProps) {
  return (
    <span {...props.rootProps} style={{ whiteSpace: "nowrap" }}>
      {props.day.date.getDate() === 19 ? `🎉` : props.formattedDate}
    </span>
  );
}

export function CustomDayDate() {
  return <DayPicker mode="single" components={{ DayDate: HighlightDay }} />;
}
