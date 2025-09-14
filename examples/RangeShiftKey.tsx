import { isSameDay } from "date-fns";
import React, { type MouseEventHandler } from "react";
import {
  type DateRange,
  type DayButtonProps,
  DayPicker,
  useDayPicker,
} from "react-day-picker";

function DayWithShiftKey(props: DayButtonProps) {
  const { selected } = useDayPicker<{ mode: "range" }>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const requireShiftKey =
      selected?.from && !isSameDay(props.day.date, selected.from);

    if (!e.shiftKey && requireShiftKey) {
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
    from: undefined,
  });

  let footer = "Please pick a day.";

  if (range?.from && !range?.to) {
    footer = "Press Shift to choose more days.";
  } else if (range?.to) {
    const formattedFrom = range.from?.toDateString();
    const formattedTo = range.to.toDateString();
    footer = `You selected the days between ${formattedFrom} and ${formattedTo}`;
  }
  return (
    <DayPicker
      components={{
        DayButton: DayWithShiftKey,
      }}
      mode="range"
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
