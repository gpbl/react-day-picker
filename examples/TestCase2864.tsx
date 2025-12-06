import React from "react";

import { DayPicker } from "react-day-picker";

/**
 * Reproduction for Date[] matchers inside `disabled`. When passing `[dates]` as
 * a matcher, the dates should be disabled.
 */
export function TestCase2864() {
  const holidays = React.useMemo(
    () => [new Date(2025, 0, 10), new Date(2025, 0, 20)],
    [],
  );

  return (
    <div>
      <p>
        January 10 and 20, 2025 should be disabled when the Date[] matcher is
        passed directly to `disabled`.
      </p>
      <DayPicker month={new Date(2025, 0, 1)} disabled={[holidays]} />
    </div>
  );
}
