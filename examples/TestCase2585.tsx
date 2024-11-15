import React from "react";

import { DayPicker } from "react-day-picker";

/**
 * Test case for issue #2585
 *
 * @see https://github.com/gpbl/react-day-picker/issues/2585
 */
export function TestCase2585() {
  return (
    <DayPicker
      defaultMonth={new Date(2026, 1)}
      showOutsideDays
      showWeekNumber
      fixedWeeks
      numberOfMonths={12}
    />
  );
}
