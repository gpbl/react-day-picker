import * as React from 'react';

import { DayPickerContext, Head, Row } from '../../components';
import { getWeeks } from './utils/getWeeks';

export interface TableProps {
  /** The month used to render the table */
  displayMonth: Date;
}

export function Table(props: TableProps): JSX.Element {
  const context = React.useContext(DayPickerContext);
  const { locale, fixedWeeks, classNames, styles, hideHead } = context;
  const weeks = getWeeks(props.displayMonth, { locale, fixedWeeks });

  return (
    <table className={classNames?.Table} style={styles?.Table}>
      {!hideHead && <Head />}
      <tbody className={classNames?.TBody} style={styles?.TBody}>
        {Object.keys(weeks).map((weekNumber) => (
          <Row
            displayMonth={props.displayMonth}
            key={weekNumber}
            week={weeks[weekNumber]}
            weekNumber={Number(weekNumber)}
          />
        ))}
      </tbody>
    </table>
  );
}
