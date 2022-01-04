import React, { MouseEventHandler, useRef, useState } from 'react';

import { isSameDay } from 'date-fns';
import {
  Button,
  DateRange,
  DayPicker,
  DayProps,
  useDayRender
} from 'react-day-picker';

function DayWithShiftKey(props: DayProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);

  if (dayRender.isHidden) {
    return <></>;
  }
  if (!dayRender.isButton) {
    return <div {...dayRender.divProps} />;
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (dayRender.modifiersStatus.selected || e.shiftKey) {
      dayRender.buttonProps?.onClick?.(e);
    }
  };

  return (
    <Button {...dayRender.buttonProps} ref={buttonRef} onClick={handleClick} />
  );
}

export default function App() {
  const [range, setRange] = useState<DateRange>();

  let footer = 'Please pick a day.';

  if (range?.from && range?.to) {
    if (isSameDay(range.from, range.to)) {
      footer = 'Press Shift to choose more days.';
    } else {
      footer = `${range.from.toLocaleDateString()}—${range.to.toLocaleDateString()}.`;
    }
  }
  return (
    <DayPicker
      components={{ Day: DayWithShiftKey }}
      mode="range"
      onSelect={setRange}
      selected={range}
      footer={footer}
    />
  );
}
