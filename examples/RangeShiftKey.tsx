import React, { MouseEventHandler } from "react";

import { isSameDay } from "date-fns";
import {
  DateRange,
  DayButtonProps,
  DayPicker,
  useDayPicker
} from "react-day-picker";

function DayWithShiftKey(props: DayButtonProps) {
  const { selected } = useDayPicker({ mode: "range" });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (
      selected?.from &&
      !selected.to &&
      !isSameDay(props.day.date, selected.from) &&
      !e.shiftKey
    ) {
      return;
    }
    props.onClick?.(e);
  };
  return (
    <button {...props} onClick={handleClick}>
      {props.children}
    </button>
  );
}

export function RangeShiftKey() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: undefined
  });

  let footer = <p>Please pick a day.</p>;

  if (range?.from && !range?.to) {
    footer = <p>Press Shift to choose more days.</p>;
  } else if (range?.to) {
    footer = (
      <p>
        {range?.from?.toLocaleDateString()}—{range.to.toLocaleDateString()}.
      </p>
    );
  }
  return (
    <DayPicker
      components={{
        DayButton: DayWithShiftKey
      }}
      mode="range"
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
