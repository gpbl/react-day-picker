import * as React from 'react';

import { MonthProps } from '../../types/MonthProps';
import { Head } from '../Head';
import { Week } from '../Week';
import { getWeeks } from './utils/getWeeks';

export function Month(props: MonthProps): JSX.Element {
  const { month, dayPickerProps } = props;
  const {
    classNames,
    styles,
    showCaption,
    showHead,
    components
  } = dayPickerProps;
  const { Caption } = components;
  const weeks = getWeeks(month, dayPickerProps);

  return (
    <div className={classNames?.month}>
      <table className={classNames?.monthTable} style={styles?.monthTable}>
        {showCaption && (
          <Caption month={month} dayPickerProps={dayPickerProps} />
        )}
        {showHead && <Head dayPickerProps={dayPickerProps} />}
        <tbody className={classNames?.monthTbody} style={styles?.monthTbody}>
          {Object.keys(weeks).map((weekNumber) => (
            <Week
              currentMonth={month}
              key={weekNumber}
              week={weeks[weekNumber]}
              weekNumber={Number(weekNumber)}
              dayPickerProps={dayPickerProps}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
