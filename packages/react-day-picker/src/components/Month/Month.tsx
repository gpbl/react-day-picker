import * as React from 'react';

import { MonthProps } from '../../types/MonthProps';
import { defaultProps } from '../DayPicker/defaultProps';
import { Head } from '../Head';
import { Week } from '../Week';
import { getWeeks } from './utils/getWeeks';

export function Month(props: MonthProps): JSX.Element {
  const { month, dayPickerProps } = props;
  const { classNames, styles, showCaption, showHead } = dayPickerProps;
  const Caption =
    dayPickerProps.components?.Caption ?? defaultProps.components.Caption;
  const locale = dayPickerProps.locale ?? defaultProps.locale;

  const weeks = getWeeks(month, dayPickerProps);

  return (
    <div className={classNames?.month}>
      <table className={classNames?.monthTable} style={styles?.monthTable}>
        {showCaption && (
          <Caption month={month} dayPickerProps={dayPickerProps} />
        )}
        {showHead && (
          <Head
            locale={locale}
            showWeekNumber={dayPickerProps.showWeekNumber}
            dayPickerProps={dayPickerProps}
          />
        )}
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
