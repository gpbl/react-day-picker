import * as React from 'react';
import { startOfMonth } from 'date-fns';

import { Months } from '../Months';
import { defaultProps } from './defaults/defaultProps';

/**
 * Render a date picker component.
 *
 * To select a day:
 *
 * ```jsx
 * function App() {
 * return (
 *  <DayPicker
 *    initialMonth={new Date(2020, 8)}
 *    selected={[
 *      new Date(2020, 8, 1),
 *      new Date(2020, 8, 19),
 *      new Date(2020, 8, 21),
 *      { after: new Date(2020, 8, 30), before: new Date(2020, 10, 1) }
 *    ]}
 *  />
 * );
 * ```
 * @category Components
 */
export function DayPicker(props = defaultProps): JSX.Element {
  const isControlled = Boolean(props.month);

  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(props.initialMonth || new Date())
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
