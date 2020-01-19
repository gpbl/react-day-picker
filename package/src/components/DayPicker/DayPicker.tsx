import * as React from "react";
import { startOfMonth } from "date-fns";

import { DayPickerControlled } from "./DayPickerControlled";
import { DayPickerProps } from "./types";

// Export types
export * from "./types";

/**
 * # ReactDayPicker
 *
 * Welcome to react-day-picker!
 */
export const DayPicker: React.FC<DayPickerProps> = (
  initialProps: DayPickerProps
) => {
  const { initialMonth, ...props } = initialProps;
  const isControlled = Boolean(props.month);

  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(initialMonth || new Date())
  );

  function handleMonthChange(month: Date, e: React.MouseEvent): void {
    setCurrentMonth(month);
    if (props.onMonthChange) {
      props.onMonthChange(month, e);
    }
  }

  return (
    <DayPickerControlled
      {...props}
      onMonthChange={!isControlled ? handleMonthChange : props.onMonthChange}
      month={isControlled ? props.month : currentMonth}
    />
  );
};
