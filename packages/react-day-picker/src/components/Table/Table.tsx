import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { getWeeks } from './utils/getWeeks';

/**
 * The props for the [[Table]] component.
 */
export interface TableProps {
  captionId: string | undefined;
  /** The month where the table is displayed. */
  displayMonth: Date;
}

/**
 * Render the table with the calendar.
 */
export function Table(props: TableProps): JSX.Element {
  const {
    locale,
    classNames,
    styles,
    hideHead,
    fixedWeeks,
    components: { Head, Row, Footer }
  } = useDayPicker();
  const weeks = getWeeks(props.displayMonth, { locale, fixedWeeks });
  return (
    <table
      role="grid"
      className={classNames.table}
      style={styles.table}
      aria-labelledby={props.captionId}
    >
      {!hideHead && <Head />}
      <tbody className={classNames.tbody} style={styles.tbody}>
        {weeks.map((week) => (
          <Row
            displayMonth={props.displayMonth}
            key={week.weekNumber}
            dates={week.dates}
            weekNumber={week.weekNumber}
          />
        ))}
      </tbody>
      <Footer />
    </table>
  );
}
