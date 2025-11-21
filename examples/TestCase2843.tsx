import React, { useState } from "react";

import { type DateRange, DayPicker } from "react-day-picker";

export function TestCase2843() {
  const [selected, setSelected] = useState<DateRange>();

  const disabled = [
    ...(selected?.from ? [{ before: selected.from }] : []),
    ...(selected?.from ? [selected.from] : []),
  ];

  return (
    <DayPicker
      animate
      mode="range"
      selected={selected}
      min={1}
      disabled={disabled}
      onSelect={(value, date) => {
        setSelected((prevValue) => {
          if (prevValue?.from && prevValue?.to) {
            return {
              from: date,
              to: undefined,
            };
          }

          return value;
        });
      }}
    />
  );
}
