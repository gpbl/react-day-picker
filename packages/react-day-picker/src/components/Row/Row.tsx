import * as React from 'react';

import { getUnixTime } from 'date-fns';

import { WeekNumber } from '../../components';
import { useDayPicker } from '../../hooks';
import { UIElement as UI } from '../../types';

/**
 * The props for the [[Row]] component.
 */
export interface RowProps {
  /** The month where the row is displayed. */
  displayMonth: Date;
  /** The number of the week to render. */
  weekNumber: number;
  /** The days contained in the week. */
  week: Date[];
}

/**
 * Render a row in the calendar, with the days and optionally the week number.
 */
export function Row(props: RowProps): JSX.Element {
  const { weekNumber, week } = props;
  const {
    styles,
    classNames,
    showWeekNumber,
    components: { Day }
  } = useDayPicker();

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
