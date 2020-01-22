import * as React from "react";
import { startOfMonth } from "date-fns";

import { Months } from "../Months";
import { DayPickerProps } from "./types";

/**
 * Render a day picker.
 *
 * @category Components
 */
export function DayPicker(props: DayPickerProps): JSX.Element {
  const { initialMonth, month, ...controlledProps } = props;
  const isControlled = Boolean(month);

  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(initialMonth || new Date())
  );

  function handleMonthChange(month: Date, e: React.MouseEvent): void {
    setCurrentMonth(month);
    if (props.onMonthChange) props.onMonthChange(month, e);
  }

  return (
    <Months
      {...controlledProps}
      onMonthChange={!isControlled ? handleMonthChange : props.onMonthChange}
      month={isControlled ? month : currentMonth}
    />
  );
}
