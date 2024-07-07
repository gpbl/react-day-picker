import React from "react";

import { DayPicker, type DayButtonProps } from "react-day-picker";

function HighlightDay(props: DayButtonProps) {
  const { day, modifiers, ...buttonProps } = props;
  return (
    <button {...buttonProps} style={{ whiteSpace: "nowrap" }}>
      {props.day.date.getDate() === 19 ? `🎉` : props.children}
    </button>
  );
}

export function CustomDayButton() {
  return <DayPicker mode="single" components={{ DayButton: HighlightDay }} />;
}
