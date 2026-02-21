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
      rangeResetOnSelect
      footer={
        <div>
          <p data-testid="from">
            from: {selected?.from && format(selected?.from, "yyyy-MM-dd")}
          </p>
          <p data-testid="to">
            to: {selected?.to && format(selected?.to, "yyyy-MM-dd")}
          </p>
        </div>
      }
    />
  );
}
