import * as React from 'react';

import { getUnixTime } from 'date-fns';

import { useProps } from '../../hooks';
import { UIElement } from '../../types';

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
        className={classNames?.[UIElement.RowHead]}
        style={styles?.[UIElement.RowHead]}
        aria-label={label}
      >
        {formatWeekNumber(Number(weekNumber), { locale })}
      </th>
    );
  }

  return (
    <tr className={classNames?.[UIElement.Row]} style={styles?.[UIElement.Row]}>
      {weekNumberCell}
      {week.map((day) => (
        <td
          className={classNames?.[UIElement.Cell]}
          style={styles?.[UIElement.Cell]}
          key={getUnixTime(day)}
        >
          <Day displayMonth={props.displayMonth} day={day} />
        </td>
      ))}
    </tr>
  );
}
