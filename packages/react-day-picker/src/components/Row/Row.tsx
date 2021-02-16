import * as React from 'react';

import { getUnixTime } from 'date-fns';

import { useProps } from '../../hooks';

export interface RowProps {
  /** The month where the row is displayed. */
  displayMonth: Date;
  /** The number of the week to render. */
  weekNumber: number;
  /** The days contained in the week. */
  week: Date[];
}

export function Row(props: RowProps): JSX.Element {
  const { weekNumber, week } = props;
  const {
    styles,
    classNames,
    locale,
    showWeekNumber,
    labels,
    formatters: { formatWeekNumber },
    components: { Day }
  } = useProps();

  let weekNumberCell;
  if (showWeekNumber) {
    const { weekNumberLabel } = labels;
    const label = weekNumberLabel(Number(weekNumber), { locale });
    weekNumberCell = (
      <th
        className={classNames?.RowHead}
        style={styles?.RowHead}
        aria-label={label}
      >
        {formatWeekNumber(Number(weekNumber), { locale })}
      </th>
    );
  }

  return (
    <tr className={classNames?.Row} style={styles?.Row}>
      {weekNumberCell}
      {week.map((day) => (
        <td
          className={classNames?.Cell}
          style={styles?.Cell}
          key={getUnixTime(day)}
        >
          <Day displayMonth={props.displayMonth} day={day} />
        </td>
      ))}
    </tr>
  );
}
