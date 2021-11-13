import * as React from 'react';

import { Button } from '../Button';

import { DayProps } from './DayProps';
import { useDay } from './hooks/useDay';

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
