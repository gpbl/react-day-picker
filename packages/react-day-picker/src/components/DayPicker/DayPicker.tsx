import { isAfter, isBefore, startOfMonth } from 'date-fns';
import * as React from 'react';

import { Months } from '../Months';
import { DEFAULT_PROPS } from './defaults/props';

/**
 * Render a date picker component.
 *
 * @category Component
 */
export function DayPicker(props = DEFAULT_PROPS): JSX.Element {
  const isControlled = Boolean(props.month);

  let initialMonth = startOfMonth(
    props.initialMonth || (props.today !== 'off' && props.today) || new Date()
  );

  if (props.toMonth && isAfter(initialMonth, startOfMonth(props.toMonth))) {
    initialMonth = startOfMonth(props.toMonth);
  }

  if (
    props.fromMonth &&
    isBefore(initialMonth, startOfMonth(props.fromMonth))
  ) {
    initialMonth = startOfMonth(props.fromMonth);
  }

  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(initialMonth)
  );

  function handleMonthChange(month: Date, e: React.MouseEvent): void {
    setCurrentMonth(month);
    props.onMonthChange?.(month, e);
  }
  return (
    <Months
      {...props}
      onMonthChange={!isControlled ? handleMonthChange : props.onMonthChange}
      month={isControlled ? props.month : currentMonth}
    />
  );
}
