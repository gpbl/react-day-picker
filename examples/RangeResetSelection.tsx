import React, { useState } from "react";
import { format } from "date-fns";

import {
  type DateRange,
  type DayEventHandler,
  DayPicker,
  type OnSelectHandler,
} from "react-day-picker";

export function RangeResetSelection() {
  const [selected, setSelected] = useState<DateRange>();

  // use onSelect event which properly handles valid range selection
  // based on valid days in the calendar
  const handleSelect: OnSelectHandler<DateRange | undefined> = (range) => {
    // the other cases are handled by onDayClick handler
    if (selected?.from && !selected.to) {
      setSelected(range);
    }
  };

  const handleDayClick: DayEventHandler<React.MouseEvent> = (date) => {
    // handled by onSelect handler
    if (selected?.from && !selected.to) {
      return;
    }
    setSelected({ from: date });
  };

  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={handleSelect}
      onDayClick={handleDayClick}
      footer={
        <div>
          <p data-testid="from">from: {selected?.from && format(selected?.from, "yyyy-MM-dd")}</p>
          <p data-testid="to">to: {selected?.to && format(selected?.to, "yyyy-MM-dd")}</p>
        </div>
      }
    />
  );
}
