import { enAU } from "date-fns/locale";
import React from "react";
import { DateLib, DayPicker } from "react-day-picker";

/**
 * Test case for issue #2511
 *
 * @see https://github.com/gpbl/react-day-picker/issues/2511
 */
export function TestCase2511() {
  return (
    <DayPicker
      dateLib={new DateLib({ locale: enAU })}
      mode="single"
      showOutsideDays
    />
  );
}
