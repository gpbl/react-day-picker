import { isSameDay } from 'date-fns';
import React, { MouseEventHandler, useState } from 'react';
import {
  Button,
  DateRange,
  DayPicker,
  DayProps,
  useDay
} from 'react-day-picker';

function DayWithShiftKey(props: DayProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const day = useDay(props.date, props.displayMonth, buttonRef);

  if (!day.buttonProps && !day.nonInteractiveProps) {
    return <></>;
  }
  if (day.nonInteractiveProps) {
    return <div {...day.nonInteractiveProps} />;
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!day.selected || day.modifiers.selected || e.shiftKey) {
      day.buttonProps.onClick(e);
    }
  };

  return <Button {...day.buttonProps} ref={buttonRef} onClick={handleClick} />;
}

export default function App() {
  const [range, setRange] = useState<DateRange>();

  let footer = 'Please pick a day.';
  if (range) {
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
