import React, { MouseEventHandler } from "react";

import { isSameDay } from "date-fns";
import {
  DateRange,
  DayPicker,
  type DayProps,
  useSelection
} from "react-day-picker";

function DayWithShiftKey(props: DayProps) {
  const { selected } = useSelection<"range">();
  const onClick = props.rootProps?.onClick;

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (
      selected?.from &&
      !selected.to &&
      !isSameDay(props.day.date, selected.from) &&
      !e.shiftKey
    ) {
      return;
    }
    onClick?.(e);
  };
  return (
    <div {...props.rootProps} onClick={handleClick}>
      {props.children}
    </div>
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
        Day: DayWithShiftKey
      }}
      mode="range"
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
