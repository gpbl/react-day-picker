import React, { MouseEventHandler } from 'react';

import { useDayPicker } from 'hooks';

/**
 * The props for the [[WeekNumber]] component.
 */
export interface WeekNumberProps {
  number: number;
  dates: Date[];
}

/**
 * Render the week number element. If `onWeekNumberClick` is passed to DayPicker, it
 * renders a button, otherwise a span element.
 */
export function WeekNumber(props: WeekNumberProps): JSX.Element {
  const { number: weekNumber, dates } = props;
  const {
    onWeekNumberClick,
    styles,
    classNames,
    locale,
    labels: { labelWeekNumber },
    formatters: { formatWeekNumber }
  } = useDayPicker();

  const label = labelWeekNumber(Number(weekNumber), { locale });
  const handleClick: MouseEventHandler = function (e) {
    onWeekNumberClick?.(weekNumber, dates, e);
  };

  const Component = onWeekNumberClick ? 'button' : 'span';

  const className = [classNames.weeknumber, classNames.button_reset];
  return (
    <Component
      aria-label={label}
      className={className.join(' ')}
      style={styles.weeknumber}
      onClick={handleClick}
    >
      {formatWeekNumber(Number(weekNumber), { locale })}
    </Component>
  );
}
