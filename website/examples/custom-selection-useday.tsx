import React from 'react';
import { Button, DayPicker, DayProps, useDay } from 'react-day-picker';

/**
 * A custom `Day` component that will enable a range selection only when the
 * shift key is pressed.
 */
function Day(props: DayProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, nonInteractiveProps, selected, modifiers } = useDay(
    props.date,
    props.displayMonth,
    buttonRef
  );

  if (!buttonProps && !nonInteractiveProps) return <></>;

  if (nonInteractiveProps) return <div {...nonInteractiveProps} />;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!selected || modifiers.selected || e.shiftKey) {
      buttonProps.onClick(e);
    }
  };

  return <Button {...buttonProps} ref={buttonRef} onClick={handleClick} />;
}

export function Example() {
  return <DayPicker components={{ Day }} mode="range" />;
}
