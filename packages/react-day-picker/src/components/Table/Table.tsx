import * as React from 'react';

import { Head } from '../../components';
import { useDayPicker } from '../../hooks';
import { UIElement } from '../../types';
import { getWeeks } from './utils/getWeeks';

/**
 * The props for the [[Table]] component.
 */
export interface TableProps {
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
    components: { Row, Footer }
  } = useDayPicker();
  const weeks = getWeeks(props.displayMonth, { locale, fixedWeeks });
  return (
    <table
      className={classNames[UIElement.Table]}
      style={styles[UIElement.Table]}
    >
      {!hideHead && <Head />}
      <tbody
        className={classNames[UIElement.TBody]}
        style={styles[UIElement.TBody]}
      >
        {Object.keys(weeks).map((weekNumber) => (
          <Row
            displayMonth={props.displayMonth}
            key={weekNumber}
            dates={weeks[weekNumber]}
            weekNumber={Number(weekNumber)}
          />
        ))}
      </tbody>
      <Footer />
    </table>
  );
}
