import React from "react";

import { DayPicker } from "react-day-picker";

/**
 * Test case for issue #2835. Note that this cannot be replicated in jsdom.
 *
 * @see https://github.com/gpbl/react-day-picker/issues/1567
 */
export function TestCase2842() {
  return (
    <DayPicker
      startMonth={new Date(1935, 5, 1)}
      endMonth={new Date(1935, 5, 1)}
      captionLayout="dropdown-years"
      timeZone="Asia/Tehran"
    />
  );
}
