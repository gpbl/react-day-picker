import { DayPickerContext } from '../../components';
import { getUnixTime } from 'date-fns';
import * as React from 'react';

export interface RowProps {
  /** The month where the row is displayed. */
  displayMonth: Date;
  /** The number of the week to render. */
  weekNumber: number;
  /** The days contained in the week. */
  week: Date[];
}

export function Row(props: RowProps): JSX.Element {
  const context = React.useContext(DayPickerContext);
  const { weekNumber, week } = props;

  const { styles, classNames, locale } = context;
  const { formatWeekNumber } = context.formatters;
  const { Day } = context.components;

  let weekNumberCell;
  if (context.showWeekNumber) {
    const { weekNumberLabel } = context.labels;
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
