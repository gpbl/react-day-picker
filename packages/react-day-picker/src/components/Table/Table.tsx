import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { getWeeks } from './utils/getWeeks';

/**
 * The props for the [[Table]] component.
 */
export interface TableProps {
  /** The ID of the label of the table (the same given to the Caption). */
  ['aria-labelledby']?: string;
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
      className={classNames.table}
      style={styles.table}
      role="grid"
      aria-labelledby={props['aria-labelledby']}
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
