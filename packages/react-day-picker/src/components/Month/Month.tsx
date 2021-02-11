import * as React from 'react';

import { Caption as DefaultMonthCaption } from '../Caption';
import { defaultLocale } from '../DayPicker/defaults/DefaultProps';
import { Head } from '../Head';
import { WeekRow } from '../Week';
import { getWeeks } from './getWeeks';
import { MonthProps } from './types/MonthProps';

export function Month(props: MonthProps): JSX.Element {
  const { month, dayPickerProps } = props;
  const { classNames, styles, showCaption, showHead } = dayPickerProps;
  const MonthCaption =
    dayPickerProps.components?.MonthCaption ?? DefaultMonthCaption;
  const locale = dayPickerProps.locale ?? defaultLocale;

  const weeks = getWeeks(month, dayPickerProps);

  return (
    <div className={classNames?.month}>
      <table className={classNames?.monthTable} style={styles?.monthTable}>
        {showCaption && (
          <MonthCaption month={month} dayPickerProps={dayPickerProps} />
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
            <WeekRow
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
