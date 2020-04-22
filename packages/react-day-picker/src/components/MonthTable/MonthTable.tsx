import * as React from 'react';
import { Head } from '../Head';
import { WeekRow } from '../WeekRow';
import { getWeeks } from './getWeeks';
import { MonthTableProps } from './types';

/**
 * Render the month table.
 * @category Components
 */
export function MonthTable(props: MonthTableProps): JSX.Element {
  const { month, dayPickerProps } = props;
  const { locale, classNames, styles } = dayPickerProps;
  const { showCaption, showHead } = dayPickerProps;
  const MonthCaption = dayPickerProps.swizzle!.MonthCaption;

  const weeks = getWeeks(month, dayPickerProps);

  return (
    <div className={classNames?.month}>
      <table className={classNames?.monthTable} style={styles?.monthTable}>
        {showCaption && (
          <MonthCaption month={month} dayPickerProps={dayPickerProps} />
        )}
        {showHead && (
          <Head
            locale={locale!}
            showWeekNumber={dayPickerProps.showWeekNumber}
            dayPickerProps={dayPickerProps}
          />
        )}
        <tbody className={classNames?.monthTbody} style={styles?.monthTbody}>
          {Object.keys(weeks).map((weekNumber) => (
            <WeekRow
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
