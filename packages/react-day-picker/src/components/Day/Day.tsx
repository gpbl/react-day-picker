import React from 'react';

import { Button } from '../Button';
import { useDay } from './hooks/useDay';

/** Represent the props used by the [[Day]] component. */
export interface DayProps {
  /** The month where the date is displayed. */
  displayMonth: Date;
  /** The date to render. */
  date: Date;
}

/**
 * The content of a day cell – as a button or span element according to its
 * modifiers.
 */
export function Day(props: DayProps): JSX.Element {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const day = useDay(props.date, props.displayMonth, buttonRef);
  const { buttonProps, nonInteractiveProps } = day;

  if (!buttonProps && !nonInteractiveProps) {
    return <></>;
  }
  if (nonInteractiveProps) {
    return <div {...nonInteractiveProps} />;
  }
  return <Button ref={buttonRef} {...buttonProps} />;
}
