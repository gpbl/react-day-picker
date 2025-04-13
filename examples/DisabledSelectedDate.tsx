import React from "react";

import { DayPicker } from "react-day-picker";

const today = new Date(2025, 2, 8);
const toDate = new Date(today);
toDate.setDate(toDate.getDate() + 3);

/**
 * Test case for issue #2699
 *
 * @see https://github.com/gpbl/react-day-picker/issues/2699
 */
export function DisabledSelectedDate() {
  return (
    <DayPicker
      mode="range"
      disabled
      today={today}
      modifiersStyles={{
        selected: {
          backgroundColor: "red"
        }
      }}
      selected={{
        from: today,
        to: toDate
      }}
    />
  );
}
