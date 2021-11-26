import React, { MouseEventHandler, useState } from "react";
import {
  Button,
  DateRange,
  DayPicker,
  DayProps,
  useDay,
} from "react-day-picker";

function Day(props: DayProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { buttonProps, nonInteractiveProps, selected, modifiers } =
    useDay(props.date, props.displayMonth, buttonRef);

  if (!buttonProps && !nonInteractiveProps) return <></>;
  if (nonInteractiveProps) return <div {...nonInteractiveProps} />;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!selected || modifiers.selected || e.shiftKey) {
      buttonProps.onClick(e);
    }
  };

  return (
    <Button {...buttonProps} ref={buttonRef} onClick={handleClick} />
  );
}

export default function App() {
  const [range, setRange] = useState<DateRange>();
  return (
    <DayPicker
      components={{ Day }}
      mode="range"
      onSelect={setRange}
      selected={range}
    />
  );
}
