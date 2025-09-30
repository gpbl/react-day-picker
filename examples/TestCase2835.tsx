import React from "react";

import { DayPicker } from "react-day-picker";

/**
 * Test case for issue #2835. Note that this cannot be replicated in jsdom.
 *
 * @see https://github.com/gpbl/react-day-picker/issues/1567
 */
export function TestCase2835() {
  return (
    <DayPicker
      mode="single"
      startMonth={new Date(1900, 1, 1)}
      captionLayout="dropdown-years"
      timeZone="America/Sao_Paulo"
    />
  );
}
