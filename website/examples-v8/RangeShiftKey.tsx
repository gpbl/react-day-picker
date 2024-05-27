import React from "react";

import { isSameDay } from "date-fns";
import {
  Button,
  DateRange,
  DayPicker,
  DayProps,
  useDayRender
} from "./DayPicker";

function DayWithShiftKey(props: DayProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);

  if (dayRender.isHidden) {
    return <></>;
  }
  if (!dayRender.isButton) {
    return <div {...dayRender.divProps} />;
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (
      !dayRender.selectedDays ||
      dayRender.activeModifiers.selected ||
      e.shiftKey
    ) {
      dayRender.buttonProps?.onClick?.(e);
    }
  };

  return (
    <Button {...dayRender.buttonProps} ref={buttonRef} onClick={handleClick} />
  );
}

export function RangeShiftKey() {
  const [range, setRange] = React.useState<DateRange>();

  let footer = <p>Please pick a day.</p>;

  if (range?.from && range?.to) {
    if (isSameDay(range.from, range.to)) {
      footer = <p>Press Shift to choose more days.</p>;
    } else {
      footer = (
        <p>
          {range.from.toLocaleDateString()}—{range.to.toLocaleDateString()}.
        </p>
      );
    }
  }
  return (
    <DayPicker
      components={{
        Day: DayWithShiftKey
      }}
      mode="range"
      onSelect={setRange}
      selected={range}
      footer={footer}
    />
  );
}
