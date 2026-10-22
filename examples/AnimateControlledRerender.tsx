import { DayPicker } from "@daypicker/react";
import React, { useState } from "react";

export function AnimateControlledRerender() {
  const [month, setMonth] = useState(new Date());
  const [renders, setRenders] = useState(0);

  const handleMonthChange = (newMonth: Date) => {
    setMonth(newMonth);
    // Re-render the parent while the month animation is still running.
    setTimeout(() => setRenders((count) => count + 1), 100);
  };

  return (
    <>
      <DayPicker
        animate
        month={month}
        onMonthChange={handleMonthChange}
        fixedWeeks
      />
      <p>Parent re-renders during navigation: {renders}</p>
    </>
  );
}
