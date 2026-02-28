import { format } from "date-fns";
import React, { useState } from "react";

import {
  type DateRange,
  DayPicker,
  type OnSelectHandler,
} from "react-day-picker";

export function RangeResetSelection() {
  const [selected, setSelected] = useState<DateRange>();

  const handleSelect: OnSelectHandler<DateRange | undefined> = (range) => {
    setSelected(range);
  };

  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={handleSelect}
      resetOnSelect
      footer={
        <p>
          <span data-testid="from">
            {selected?.from && format(selected?.from, "yyyy-MM-dd")}
          </span>
          <span data-testid="to">
            {selected?.to && `—${format(selected?.to, "yyyy-MM-dd")}`}
          </span>
        </p>
      }
    />
  );
}
