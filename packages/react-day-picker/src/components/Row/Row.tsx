import * as React from 'react';

import { getUnixTime } from 'date-fns';

import { WeekNumber } from '../../components';
import { useProps } from '../../hooks';
import { UIElement as UI } from '../../types';

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
    showWeekNumber,
    components: { Day }
  } = useProps();

  let weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = (
      <th className={classNames?.[UI.RowHead]} style={styles?.[UI.RowHead]}>
        <WeekNumber number={weekNumber} dates={week} />
      </th>
    );
  }

  return (
    <tr className={classNames?.[UI.Row]} style={styles?.[UI.Row]}>
      {weekNumberCell}
      {week.map((day) => (
        <td
          className={classNames?.[UI.Cell]}
          style={styles?.[UI.Cell]}
          key={getUnixTime(day)}
        >
          <Day displayMonth={props.displayMonth} day={day} />
        </td>
      ))}
    </tr>
  );
}
