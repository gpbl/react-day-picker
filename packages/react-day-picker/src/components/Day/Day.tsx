import React, { useRef } from 'react';

import { useDay } from 'hooks/useDay';

import { Button } from '../Button';

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const day = useDay(props.date, props.displayMonth, buttonRef);

  if (!day.buttonProps && !day.nonInteractiveProps) {
    return <></>;
  }
  if (day.nonInteractiveProps) {
    return <div {...day.nonInteractiveProps} />;
  }
  return <Button ref={buttonRef} {...day.buttonProps} />;
}
