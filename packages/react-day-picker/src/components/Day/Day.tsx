import React, { useRef } from 'react';

import { useDayRender } from 'hooks/useDayRender';

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
  const day = useDayRender(props.date, props.displayMonth, buttonRef);

  if (day.isHidden) {
    return <></>;
  }

  if (!day.isButton) {
    return <div {...day.divProps} />;
  }

  return <Button ref={buttonRef} {...day.buttonProps} />;
}
