import React, { MouseEventHandler } from 'react';

import { useProps } from '../../hooks';
import { UIElement as UI } from '../../types';

export interface WeekNumberProps {
  number: number;
  dates: Date[];
}
export function WeekNumber(props: WeekNumberProps): JSX.Element {
  const { number: weekNumber, dates } = props;
  const {
    styles,
    classNames,
    locale,
    labels: { weekNumberLabel },
    formatters: { formatWeekNumber },
    onWeekNumberClick
  } = useProps();
  const label = weekNumberLabel(Number(weekNumber), { locale });

  const handleClick: MouseEventHandler = function (e) {
    onWeekNumberClick?.(weekNumber, dates, e);
  };

  const Component = onWeekNumberClick ? 'button' : 'span';

  return (
    <Component
      aria-label={label}
      className={classNames?.[UI.WeekNumber]}
      style={styles?.[UI.WeekNumber]}
      onClick={handleClick}
    >
      {formatWeekNumber(Number(weekNumber), { locale })}
    </Component>
  );
}
